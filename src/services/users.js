
import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    Create,
    SimpleForm,
    TextInput
} from 'react-admin';

export const UsersList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField label="id" source="id" />
            <TextField label="E-mail" source="email" />
        </Datagrid>
    </List>
);

export const UserCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label="E-mail" source="email" />        
            <TextInput label="Password" source="password" type="password" />
        </SimpleForm>
    </Create>
);