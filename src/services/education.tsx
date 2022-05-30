import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  Edit,
  Show,
  SimpleShowLayout,
  EditButton,
  ShowButton
} from 'react-admin';

export const EducationList = (props: object) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <DateField source="fromDate" />
      <DateField source="toDate" />
      <TextField source="degree" />
      <TextField source="institution" />
      <TextField source="city" />
      <TextField source="country" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
      <EditButton />
      <ShowButton />
    </Datagrid>
  </List>
);

export const EducationShow = (props: object) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <DateField source="fromDate" />
      <DateField source="toDate" />
      <TextField source="degree" />
      <TextField source="institution" />
      <TextField source="city" />
      <TextField source="country" />
      <TextField source="description" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </SimpleShowLayout>
  </Show>
);

export const EducationCreate = (props: object) => (
  <Create {...props}>
    <SimpleForm>
      <DateInput source="fromDate" />
      <DateInput source="toDate" />
      <TextInput source="degree" />
      <TextInput source="institution" />
      <TextInput source="city" />
      <TextInput source="country" />
      <TextInput multiline source="description" />
    </SimpleForm>
  </Create>
);

export const EducationEdit = (props: object) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <DateInput source="fromDate" />
      <DateInput source="toDate" />
      <TextInput source="degree" />
      <TextInput source="institution" />
      <TextInput source="city" />
      <TextInput source="country" />
      <TextInput multiline source="description" />
    </SimpleForm>
  </Edit>
);
