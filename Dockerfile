FROM node:10 AS build

WORKDIR /build

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build --verbose

RUN mkdir /build/dist/plugins

RUN ls -la /build/dist/plugins

COPY plugins/ /build/dist/plugins/

FROM nginx:stable-alpine

RUN apk update && \
    apk add nodejs

COPY --from=build /build/dist /usr/share/nginx/html
COPY .docker/nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /app

COPY config.default.json .
COPY set-env-vars.js .
COPY .docker/entrypoint.sh .

ENTRYPOINT ["./entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]
