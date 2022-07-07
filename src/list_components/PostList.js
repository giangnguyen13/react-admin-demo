import * as React from "react";

// in src/posts.js
import {
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  ReferenceInput,
  SelectInput,
  TextInput,
  List,
} from "react-admin";

const postFilters = [
  <TextInput source='q' label='Search' alwaysOn />,
  <ReferenceInput source='userId' label='User' reference='users'>
    <SelectInput optionText='name' />
  </ReferenceInput>,
];

export const PostList = () => (
  <List filters={postFilters}>
    <Datagrid>
      <TextField source='id' />
      <ReferenceField source='userId' reference='users'>
        <TextField source='name' />
      </ReferenceField>
      <TextField source='title' />
      <EditButton />
    </Datagrid>
  </List>
);
