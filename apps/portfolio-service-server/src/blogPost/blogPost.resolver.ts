import * as graphql from "@nestjs/graphql";
import { BlogPostResolverBase } from "./base/blogPost.resolver.base";
import { BlogPost } from "./base/BlogPost";
import { BlogPostService } from "./blogPost.service";

@graphql.Resolver(() => BlogPost)
export class BlogPostResolver extends BlogPostResolverBase {
  constructor(protected readonly service: BlogPostService) {
    super(service);
  }
}
