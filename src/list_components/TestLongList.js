import React from "react";
import { Datagrid, List, TextField, DateField, TextInput } from "react-admin";
import EditActionButton from "../components/EditActionButton";

const listFilters = [<TextInput source='q' label='Search' alwaysOn />];
const TestLongList = () => {
  return (
    <List filters={listFilters} title='My Custom Long List' perPage={5}>
      <Datagrid size='medium'>
        <EditActionButton />
        <TextField source='uuid' />
        <TextField source='version' />
        <TextField source='deviceType' />
        <TextField source='size' />
        <TextField source='productType' />
        <TextField source='name' />
        <TextField source='type' />

        <TextField source='default' />
        <TextField source='unit' />
        <TextField source='tags' />
        <TextField source='edit' />
        <TextField source='order' />
        <TextField source='offset' />
        <TextField source='multi' />

        <TextField source='range.type' Label='Type Range' />

        <TextField source='active' />
        <TextField source='export' />
        <TextField source='colorEdit' />
        <TextField source='colorReadonly' />
        <TextField source='colorTextEdit' />
        <TextField source='colorTextReadOnly' />
        <DateField source='createdAt' label='First In' />
        <DateField source='updatedAt' label='Last Updated On' />
      </Datagrid>
    </List>
  );
};

export default TestLongList;
