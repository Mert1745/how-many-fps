#Stage 1
FROM node:14-alpine as build-step
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build

# Stage 2
FROM nginx:alpine
COPY --from=build-step /app/build /usr/share/nginx/html
COPY ./default.conf /etc/nginx/conf.d/