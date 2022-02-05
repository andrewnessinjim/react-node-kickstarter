FROM node:17-bullseye-slim 

#Express port
EXPOSE 3000

#Hack to solve cypress perm error
RUN chmod 777 /root
ENV NODE_ENV=production

WORKDIR /app/client

COPY ./client/package*.json ./

RUN npm install

COPY ./client /app/client
RUN npm run build

RUN mkdir -p /app/server/ && mv ./build /app/server/public

RUN rm -rf /app/client

WORKDIR /app/server

COPY ./server/package*.json ./

ENV NODE_ENV=development
RUN npm install
RUN npm install -g gulp
ENV PATH=/app/server/node_modules/.bin:$PATH
COPY ./server /app/server

RUN gulp build

ENV NODE_ENV=production
RUN npm install

CMD ["node", "/app/server/run.js"]