import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { BlogPostController } from "../blogPost.controller";
import { BlogPostService } from "../blogPost.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  author: "exampleAuthor",
  content: "exampleContent",
  createdAt: new Date(),
  cta: "exampleCta",
  id: "exampleId",
  publishedAt: new Date(),
  title: "exampleTitle",
  updatedAt: new Date(),
  viewCount: 42,
};
const CREATE_RESULT = {
  author: "exampleAuthor",
  content: "exampleContent",
  createdAt: new Date(),
  cta: "exampleCta",
  id: "exampleId",
  publishedAt: new Date(),
  title: "exampleTitle",
  updatedAt: new Date(),
  viewCount: 42,
};
const FIND_MANY_RESULT = [
  {
    author: "exampleAuthor",
    content: "exampleContent",
    createdAt: new Date(),
    cta: "exampleCta",
    id: "exampleId",
    publishedAt: new Date(),
    title: "exampleTitle",
    updatedAt: new Date(),
    viewCount: 42,
  },
];
const FIND_ONE_RESULT = {
  author: "exampleAuthor",
  content: "exampleContent",
  createdAt: new Date(),
  cta: "exampleCta",
  id: "exampleId",
  publishedAt: new Date(),
  title: "exampleTitle",
  updatedAt: new Date(),
  viewCount: 42,
};

const service = {
  createBlogPost() {
    return CREATE_RESULT;
  },
  blogPosts: () => FIND_MANY_RESULT,
  blogPost: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("BlogPost", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: BlogPostService,
          useValue: service,
        },
      ],
      controllers: [BlogPostController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /blogPosts", async () => {
    await request(app.getHttpServer())
      .post("/blogPosts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        publishedAt: CREATE_RESULT.publishedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /blogPosts", async () => {
    await request(app.getHttpServer())
      .get("/blogPosts")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          publishedAt: FIND_MANY_RESULT[0].publishedAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /blogPosts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/blogPosts"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /blogPosts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/blogPosts"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        publishedAt: FIND_ONE_RESULT.publishedAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /blogPosts existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/blogPosts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        publishedAt: CREATE_RESULT.publishedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/blogPosts")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
