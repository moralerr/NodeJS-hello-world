FROM node:8
WORKDIR usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install -g mocha
RUN npm install request --save
COPY . .
CMD [ "npm", "start"]
EXPOSE 8081
