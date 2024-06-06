import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CommentService } from "./comment.service";
import { CommentControllerBase } from "./base/comment.controller.base";

@swagger.ApiTags("comments")
@common.Controller("comments")
export class CommentController extends CommentControllerBase {
  constructor(protected readonly service: CommentService) {
    super(service);
  }
}
