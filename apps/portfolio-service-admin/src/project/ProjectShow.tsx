import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const ProjectShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="createdAtProject" source="createdAtProject" />
        <TextField label="description" source="description" />
        <TextField label="descriptionProject" source="descriptionProject" />
        <TextField label="ID" source="id" />
        <TextField label="link" source="link" />
        <TextField label="linkProject" source="linkProject" />
        <TextField label="title" source="title" />
        <TextField label="titleProject" source="titleProject" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="updatedAtProject" source="updatedAtProject" />
        <TextField label="viewCount" source="viewCount" />
      </SimpleShowLayout>
    </Show>
  );
};
