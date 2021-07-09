import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  Create,
  SimpleForm,
  TextInput,
  BooleanInput,
  Edit,
  BooleanField,
  Show,
  RichTextField,
  SimpleShowLayout,
  EditButton,
  ShowButton
} from "react-admin";
import RichTextInput from 'ra-input-rich-text';

export const BlogList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <RichTextField source="content" />
      <BooleanField source="draft" />
      <TextField source="createdBy" />
      <TextField source="updatedBy" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
      <EditButton />
      <ShowButton />
    </Datagrid>
  </List>
);

export const BlogShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <RichTextField source="content" />
      <BooleanField source="draft" />
      <TextField source="createdBy" />
      <TextField source="updatedBy" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </SimpleShowLayout>
  </Show>
);

export const BlogCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <RichTextInput source="content" />
      <BooleanInput source="draft" />
    </SimpleForm>
  </Create>
);

export const BlogEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <RichTextInput source="content" />
      <BooleanInput source="draft" />
    </SimpleForm>
  </Edit>
);
