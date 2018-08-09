
import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const UsersList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField label= "_id" source="_id" />
            <TextField label= "Name" source="name" />
            <TextField label="E-mail" source="email" />
        </Datagrid>
    </List>
);