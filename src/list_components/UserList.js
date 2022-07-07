import React, { useState } from "react";
import { Datagrid, EmailField, List, TextField, TextInput } from "react-admin";
import MyUrlField from "../components/MyUrlField";
import EditableField from "../components/EditableField";
import EditActionButton from "../components/EditActionButton";

const myFilters = [
  <TextInput label='Search' source='q' alwaysOn />,
  <TextInput label='Id' source='id' />,
  <TextInput label='Name' source='name' />,
  <TextInput label='Email' source='email' />,
  <TextInput label='Website' source='website' />,
  <TextInput label='Phone' source='phone' />,
  <TextInput label='Company Name' source='company.name' />,
  //   <TextInput label='Search' source='q' alwaysOn />,
  //   <ReferenceInput source='userId' label='User' reference='users'>
  //     <SelectInput optionText='name' />
  //   </ReferenceInput>,
];

const UserList = () => {
  return (
    <List filters={myFilters}>
      <Datagrid>
        <TextField
          source='id'
          onClick={() => console.log("data grid click event")}
        />
        <TextField source='name' />
        {/* <TextField source="username" /> */}
        <EmailField source='email' />
        {/* <TextField source="address.street" /> */}
        <TextField source='phone' />
        <MyUrlField source='website' />
        <TextField source='company.name' />
        <EditActionButton />
      </Datagrid>
    </List>
  );
};

export default UserList;
// const UserList = () => (
//   return <List>
//     <Datagrid>
//       <TextField
//         source='id'
//         onClick={() => console.log("data grid click event")}
//       />
//       <TextField source='name' />
//       {/* <TextField source="username" /> */}
//       <EmailField source='email' />
//       {/* <TextField source="address.street" /> */}
//       <EditableField source='phone' />
//       <MyUrlField source='website' />
//       <TextField source='company.name' />
//       <Button variant='outlined' onClick={() => console.log()}>
//         Edit
//       </Button>
//     </Datagrid>
//   </List>
// );
