import React from "react";

// in src/posts.js
import {
  ReferenceInput,
  SelectInput,
  TextInput,
  Edit,
  SimpleForm,
} from "react-admin";

import { useRecordContext } from "react-admin";

const PostTitle = () => {
  const record = useRecordContext();
  return <span>Post {record ? `#${record.id}` : ""}</span>;
};

const PostEdit = () => (
  <Edit title={<PostTitle />}>
    <SimpleForm>
      <TextInput disabled source='id' />
      <ReferenceInput source='userId' reference='users'>
        <SelectInput optionText='name' />
      </ReferenceInput>
      <TextInput source='title' />
      <TextInput multiline source='body' />
    </SimpleForm>
  </Edit>
);

export default PostEdit;
