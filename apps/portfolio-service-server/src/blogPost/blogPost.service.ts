import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BlogPostServiceBase } from "./base/blogPost.service.base";

@Injectable()
export class BlogPostService extends BlogPostServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
