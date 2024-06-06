import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ProjectList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Projects"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
