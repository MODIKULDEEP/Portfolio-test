import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const BlogPostShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="author" source="author" />
        <TextField label="bannerImage" source="bannerImage" />
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="cta" source="cta" />
        <TextField label="ID" source="id" />
        <TextField label="images" source="images" />
        <TextField label="publishedAt" source="publishedAt" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="viewCount" source="viewCount" />
      </SimpleShowLayout>
    </Show>
  );
};
