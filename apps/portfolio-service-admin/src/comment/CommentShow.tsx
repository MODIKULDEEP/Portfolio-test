import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CommentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="author" source="author" />
        <TextField label="authorComment" source="authorComment" />
        <TextField label="content" source="content" />
        <TextField label="contentComment" source="contentComment" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="createdAtComment" source="createdAtComment" />
        <TextField label="ID" source="id" />
        <TextField label="post" source="post" />
        <TextField label="postComment" source="postComment" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
