import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CommentWhereInput = {
  author?: StringNullableFilter;
  authorComment?: StringNullableFilter;
  content?: StringNullableFilter;
  contentComment?: StringNullableFilter;
  createdAtComment?: DateTimeNullableFilter;
  id?: StringFilter;
  post?: StringNullableFilter;
  postComment?: StringNullableFilter;
};
