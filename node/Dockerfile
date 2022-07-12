FROM node:lts-alpine3.15

ENV DOCKERIZE_VERSION v0.6.1

WORKDIR /usr/src/app

RUN apk add --no-cache openssl
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

COPY package.json package-lock.json /usr/src/app/
COPY src /usr/src/app/src
RUN npm install

EXPOSE 3000

CMD ["npm run", "serve"]