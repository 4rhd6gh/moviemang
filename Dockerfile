FROM node:alpine

WORKDIR /usr

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

RUN npm run build:staging

CMD npm run start