FROM node:9

WORKDIR /src
RUN npm install -g gulp

ADD . .

FROM nginx:stable-alpine
COPY --from=0 . /usr/share/nginx/html/