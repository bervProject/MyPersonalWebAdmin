import React, { Component } from "react";
import { Admin, Resource } from "react-admin";
import { authClient, restClient } from "ra-data-feathers";
import feathersClient from "./feathersClient";
import UserIcon from "@material-ui/icons/Person";
import StarIcon from "@material-ui/icons/Star";
import SchoolIcon from "@material-ui/icons/School";

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

class App extends Component {
  render() {
    return (
      <Admin
        title="Berv Admin"
        dashboard={Dashboard}
        authProvider={authClient(feathersClient, authClientOptions)}
        dataProvider={restClient(feathersClient, options)}
      >
        {permissions => [
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
          ) : null,
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
        ]}
      </Admin>
    );
  }
}

export default App;
