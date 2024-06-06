import { CommentWhereInput } from "./CommentWhereInput";
import { CommentOrderByInput } from "./CommentOrderByInput";

export type CommentFindManyArgs = {
  where?: CommentWhereInput;
  orderBy?: Array<CommentOrderByInput>;
  skip?: number;
  take?: number;
};
