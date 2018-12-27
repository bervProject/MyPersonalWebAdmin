FROM node:alpine as build
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine as run
COPY --from=build /app/build /usr/share/nginx/html
CMD nginx -g 'daemon off;'