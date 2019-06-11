import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import { authClient, restClient } from 'ra-data-feathers';
import feathersClient from './feathersClient';
import {
  UsersList,
  UserCreate
} from './services/users';
import './App.css';

const authClientOptions = {
  storageKey: 'feathers-jwt',
  authenticate: { strategy: 'local' },
};

const options = { id: 'id' };

class App extends Component {
  render() {
    return (
  <Admin
  authProvider={authClient(feathersClient, authClientOptions)}
  dataProvider={restClient(feathersClient, options)}>
        {
          permissions => [
      permissions === 'admin' ? <Resource name="users" list={UsersList} create={UserCreate} /> : null,

    ]}
    </Admin>
    );
  }
}

export default App;
