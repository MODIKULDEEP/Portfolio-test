import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const CommentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <TextInput label="authorComment" source="authorComment" />
        <TextInput label="content" multiline source="content" />
        <TextInput label="contentComment" multiline source="contentComment" />
        <DateTimeInput label="createdAtComment" source="createdAtComment" />
        <TextInput label="post" source="post" />
        <TextInput label="postComment" source="postComment" />
      </SimpleForm>
    </Edit>
  );
};
