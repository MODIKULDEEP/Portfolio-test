import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CommentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Comments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
