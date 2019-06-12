import feathers from "@feathersjs/feathers";
import rest from "@feathersjs/rest-client";
import axios from "axios";
import auth from "@feathersjs/authentication-client";

const host = 'https://bervianto-web-api.herokuapp.com';
const restClient = rest(host);
const authOptions = { jwtStrategy: 'jwt', storage: window.localStorage };

export default feathers()
    .configure(restClient.axios(axios))
    .configure(auth(authOptions));