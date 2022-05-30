import React from 'react';
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
  Edit,
  Show,
  SimpleShowLayout,
  EditButton,
  ShowButton
} from 'react-admin';

export const PortofolioList = (props: object) => (
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

export const PortofolioShow = (props: object) => (
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

export const PortofolioCreate = (props: object) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="description" />
      <TextInput source="image" type="url" />
      <TextInput source="icon" type="url" />
      <TextInput source="repository" type="url" />
    </SimpleForm>
  </Create>
);

export const PortofolioUpdate = (props: object) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="title" />
      <TextInput source="description" />
      <TextInput source="image" type="url" />
      <TextInput source="icon" type="url" />
      <TextInput source="repository" type="url" />
    </SimpleForm>
  </Edit>
);
