import React from "react";
import EditActionButton from "../components/EditActionButton";
import {
  Datagrid,
  EmailField,
  List,
  TextField,
  ReferenceField,
} from "react-admin";

const CommentList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source='id' />
        <ReferenceField source='postId' reference='posts'>
          <TextField source='title' />
        </ReferenceField>
        <TextField source='name' />
        <EmailField source='email' />
        <TextField source='body' />
        <EditActionButton />
      </Datagrid>
    </List>
  );
};

export default CommentList;
