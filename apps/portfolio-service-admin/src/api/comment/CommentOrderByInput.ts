import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  author?: SortOrder;
  authorComment?: SortOrder;
  content?: SortOrder;
  contentComment?: SortOrder;
  createdAt?: SortOrder;
  createdAtComment?: SortOrder;
  id?: SortOrder;
  post?: SortOrder;
  postComment?: SortOrder;
  updatedAt?: SortOrder;
};
