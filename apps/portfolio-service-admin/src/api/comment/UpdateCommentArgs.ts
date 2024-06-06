import { CommentWhereUniqueInput } from "./CommentWhereUniqueInput";
import { CommentUpdateInput } from "./CommentUpdateInput";

export type UpdateCommentArgs = {
  where: CommentWhereUniqueInput;
  data: CommentUpdateInput;
};
