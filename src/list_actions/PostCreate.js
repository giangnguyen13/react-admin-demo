import React from "react";

// in src/posts.js
import {
  ReferenceInput,
  SelectInput,
  TextInput,
  Create,
  SimpleForm,
} from "react-admin";

const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source='userId' reference='users'>
        <SelectInput optionText='name' />
      </ReferenceInput>
      <TextInput source='title' />
      <TextInput multiline source='body' />
    </SimpleForm>
  </Create>
);

export default PostCreate;
