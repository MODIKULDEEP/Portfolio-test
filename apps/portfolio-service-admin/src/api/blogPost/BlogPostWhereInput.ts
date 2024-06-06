import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type BlogPostWhereInput = {
  author?: StringNullableFilter;
  bannerImage?: JsonFilter;
  content?: StringNullableFilter;
  cta?: StringNullableFilter;
  id?: StringFilter;
  images?: JsonFilter;
  publishedAt?: DateTimeNullableFilter;
  title?: StringNullableFilter;
  viewCount?: IntNullableFilter;
};
