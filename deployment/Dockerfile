FROM node:18.16.0-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn build

FROM alpine:latest

RUN apk add --no-cache rsync

WORKDIR /app

COPY --from=build /app/build /app/build

COPY entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]