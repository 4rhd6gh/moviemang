FROM node:alpine

WORKDIR /usr

COPY package.json .

RUN npm install --force

COPY . .

EXPOSE 3000

RUN npm run build

CMD npm run start