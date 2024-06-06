import * as graphql from "@nestjs/graphql";
import { CommentResolverBase } from "./base/comment.resolver.base";
import { Comment } from "./base/Comment";
import { CommentService } from "./comment.service";

@graphql.Resolver(() => Comment)
export class CommentResolver extends CommentResolverBase {
  constructor(protected readonly service: CommentService) {
    super(service);
  }
}
