import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  ImageField,
  UrlField,
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

export const PortofolioList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <ImageField source="image" />
      <ImageField source="icon" />
      <UrlField source="repository" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
      <EditButton />
      <ShowButton />
    </Datagrid>
  </List>
);

export const PortofolioShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="description" />
      <ImageField source="image" />
      <ImageField source="icon" />
      <UrlField source="repository" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </SimpleShowLayout>
  </Show>
);

export const PortofolioCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="description" />
      <TextInput source="image" />
      <TextInput source="icon" />
      <TextInput source="repository" type="url" />
    </SimpleForm>
  </Create>
);

export const PortofolioUpdate = props => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="title" />
      <TextInput source="description" />
      <TextInput source="image" />
      <TextInput source="icon" />
      <TextInput source="repository" type="url" />
    </SimpleForm>
  </Edit>
);
