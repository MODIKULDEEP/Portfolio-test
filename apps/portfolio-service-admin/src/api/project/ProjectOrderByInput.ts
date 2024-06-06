import { SortOrder } from "../../util/SortOrder";

export type ProjectOrderByInput = {
  createdAt?: SortOrder;
  createdAtProject?: SortOrder;
  description?: SortOrder;
  descriptionProject?: SortOrder;
  id?: SortOrder;
  link?: SortOrder;
  linkProject?: SortOrder;
  title?: SortOrder;
  titleProject?: SortOrder;
  updatedAt?: SortOrder;
  updatedAtProject?: SortOrder;
  viewCount?: SortOrder;
};
