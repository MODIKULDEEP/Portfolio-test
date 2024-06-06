import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BlogPostService } from "./blogPost.service";
import { BlogPostControllerBase } from "./base/blogPost.controller.base";

@swagger.ApiTags("blogPosts")
@common.Controller("blogPosts")
export class BlogPostController extends BlogPostControllerBase {
  constructor(protected readonly service: BlogPostService) {
    super(service);
  }
}
