import React from "react";
import {
  List,
  Datagrid,
  TextField,
  Create,
  SimpleForm,
  TextInput,
  DisabledInput,
  Edit,
  Show,
  SimpleShowLayout,
  EditButton,
  ShowButton
} from "react-admin";

export const UsersList = props => (
  <List {...props}>
    <Datagrid>
      <TextField label="id" source="id" />
      <TextField label="E-mail" source="email" />
      <TextField source="role" />
      <EditButton />
      <ShowButton />
    </Datagrid>
  </List>
);

export const UserShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField label="id" source="id" />
      <TextField label="E-mail" source="email" />
      <TextField source="role" />
    </SimpleShowLayout>
  </Show>
);

export const UserCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput label="E-mail" source="email" />
      <TextInput label="Password" source="password" type="password" />
      <TextInput label="Role" source="role" />
    </SimpleForm>
  </Create>
);

export const UserEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <DisabledInput label="E-mail" source="email" />
      <TextInput source="role" />
    </SimpleForm>
  </Edit>
);
