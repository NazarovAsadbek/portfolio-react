FROM node:16.15.0-alpine

RUN mkdir -p /var/www/react-portfolio/
WORKDIR /var/www/react-portfolio/

COPY ./package*.json ./
RUN yarn

COPY .. .
RUN yarn build

EXPOSE 3000

CMD [ "yarn", "start"]
