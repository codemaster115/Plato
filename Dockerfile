FROM node:10-alpine as build-deps
ARG REACT_APP_VERSION=$npm_package_version
ARG REACT_APP_PLATO_API_URI
ARG NODE_PATH=src
WORKDIR /usr/src/app
COPY . .
RUN npm install --silent && npm run build 

FROM nginx:alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
