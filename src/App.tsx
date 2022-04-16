import React from 'react';
import { Admin, Resource, ResourceElement } from 'react-admin';
import { authClient, restClient } from 'ra-data-feathers';
import feathersClient from "./feathersClient";
import UserIcon from "@mui/icons-material/People";
import StarIcon from "@mui/icons-material/Star";
import SchoolIcon from "@mui/icons-material/School";

import { UsersList, UserCreate, UserEdit, UserShow } from "./services/users";
import {
  ExperienceList,
  ExperienceShow,
  ExperienceEdit,
  ExperienceCreate
} from "./services/experience";
import {
  EducationList,
  EducationShow,
  EducationCreate,
  EducationEdit
} from "./services/education";
import { PortofolioList, PortofolioShow, PortofolioUpdate, PortofolioCreate } from "./services/portofolio";
import {
  BlogList,
  BlogShow,
  BlogCreate,
  BlogEdit
} from "./services/blog";
import "./App.css";
import Dashboard from "./Dashboard";

const authClientOptions = {
  storageKey: "feathers-jwt",
  authenticate: { strategy: "local" }
};

const options = { id: "id" };

const resourceList = (permissions: any) => [
  permissions === "admin" ? (
    <Resource
      name="users"
      list={UsersList}
      create={UserCreate}
      edit={UserEdit}
      icon={UserIcon}
      show={UserShow}
    />
  ) : null,
  permissions === "admin" ? (
    <Resource
      name="experience"
      icon={StarIcon}
      list={ExperienceList}
      show={ExperienceShow}
      edit={ExperienceEdit}
      create={ExperienceCreate}
    />
  ): null,
  permissions === "admin" ? (
    <Resource
      name="education"
      icon={SchoolIcon}
      list={EducationList}
      show={EducationShow}
      edit={EducationEdit}
      create={EducationCreate}
    />
  ) : null,
  permissions === "admin" ? (
    <Resource
      name="portofolio"
      list={PortofolioList}
      show={PortofolioShow}
      edit={PortofolioUpdate}
      create={PortofolioCreate}
    />
  ) : null,
  permissions === "admin" ? (
    <Resource
      name="blog"
      list={BlogList}
      show={BlogShow}
      edit={BlogEdit}
      create={BlogCreate}
    />
  ) : null
].filter((element) => Boolean(element)).map(element => element as JSX.Element);

function App() {
  return (
    <Admin
      title="Berv Admin"
      dashboard={Dashboard}
      authProvider={authClient(feathersClient, authClientOptions)}
      dataProvider={restClient(feathersClient, options)}
    >
      {resourceList}
    </Admin>
  );
}

export default App;
