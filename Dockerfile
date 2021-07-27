FROM node:lts-alpine

WORKDIR /usr/app

COPY yarn.lock package.json ./
RUN yarn install

COPY ./dist .

EXPOSE 3333
CMD ["yarn", "start"]