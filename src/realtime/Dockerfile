FROM node:10

WORKDIR /usr/src/app
COPY . .

RUN npm install
RUN npm install -g nodemon

CMD npm run watch
EXPOSE 8085
