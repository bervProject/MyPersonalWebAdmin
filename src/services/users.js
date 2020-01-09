import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  Create,
  SimpleForm,
  TextInput,
  PasswordInput,
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
      <EmailField label="E-mail" source="email" />
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
      <EmailField label="E-mail" source="email" />
      <TextField source="role" />
    </SimpleShowLayout>
  </Show>
);

export const UserCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput label="E-mail" source="email" type="email" />
      <PasswordInput label="Password" source="password" />
      <TextInput label="Role" source="role" />
    </SimpleForm>
  </Create>
);

export const UserEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput disabled label="E-mail" source="email" type="email" />
      <TextInput source="role" />
    </SimpleForm>
  </Edit>
);
