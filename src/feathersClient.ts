import feathers from "@feathersjs/feathers";
import rest from "@feathersjs/rest-client";
import axios from "axios";
import auth from "@feathersjs/authentication-client";

const host = process.env.REACT_APP_API_HOST || 'https://stg-personal-api.berviantoleo.my.id';
const restClient = rest(host);
const authOptions = { jwtStrategy: 'jwt', storage: window.localStorage };

export default feathers()
    .configure(restClient.axios(axios))
    .configure(auth(authOptions));