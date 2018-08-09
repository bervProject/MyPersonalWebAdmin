import feathers from "@feathersjs/client";
import auth from "@feathersjs/authentication-client";

const host = 'https://bervianto-web-api.herokuapp.com';
const authOptions = { jwtStrategy: 'jwt', storage: window.localStorage };

export default feathers()
    .configure(feathers.rest(host).fetch(window.fetch.bind(window)))
    .configure(auth(authOptions));