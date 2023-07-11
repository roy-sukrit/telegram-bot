FROM node:latest
WORKDIR ./app

ADD package.json ./
ADD package-lock.json ./


RUN npm install -g typescript
RUN npm install -g ts-node
RUN npm install

COPY . .

RUN npm run build

CMD ["npm","start"]


