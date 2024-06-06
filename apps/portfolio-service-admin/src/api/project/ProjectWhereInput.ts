import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ProjectWhereInput = {
  createdAtProject?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  descriptionProject?: StringNullableFilter;
  id?: StringFilter;
  link?: StringNullableFilter;
  linkProject?: StringNullableFilter;
  title?: StringNullableFilter;
  titleProject?: StringNullableFilter;
  updatedAtProject?: DateTimeNullableFilter;
  viewCount?: IntNullableFilter;
};
