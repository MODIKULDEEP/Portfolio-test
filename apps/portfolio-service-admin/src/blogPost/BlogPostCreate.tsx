import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const BlogPostCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <div />
        <TextInput label="content" multiline source="content" />
        <TextInput label="cta" multiline source="cta" />
        <div />
        <DateTimeInput label="publishedAt" source="publishedAt" />
        <TextInput label="title" source="title" />
        <NumberInput step={1} label="viewCount" source="viewCount" />
      </SimpleForm>
    </Create>
  );
};
