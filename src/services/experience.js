import React from "react";
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
} from "react-admin";

export const ExperienceList = props => (
  <List {...props}>
    <Datagrid>
      <TextField label="id" source="id" />
      <DateField source="fromDate" />
      <DateField source="toDate" />
      <TextField source="jobName" />
      <TextField source="institution" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
      <EditButton />
      <ShowButton />
    </Datagrid>
  </List>
);

export const ExperienceShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField label="id" source="id" />
      <DateField source="fromDate" />
      <DateField source="toDate" />
      <TextField source="jobName" />
      <TextField source="institution" />
      <TextField source="description" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </SimpleShowLayout>
  </Show>
);

export const ExperienceCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <DateInput source="fromDate" />
      <DateInput source="toDate" />
      <TextInput source="jobName" />
      <TextInput source="institution" />
      <TextInput multiline source="description" />
    </SimpleForm>
  </Create>
);

export const ExperienceEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <DateInput source="fromDate" />
      <DateInput source="toDate" />
      <TextInput source="jobName" />
      <TextInput source="institution" />
      <TextInput multiline source="description" />
    </SimpleForm>
  </Edit>
);
