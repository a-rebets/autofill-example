FROM node:19-bullseye
WORKDIR /app
COPY . .
RUN mkdir -p /srv/files
RUN touch /srv/files/database.db
RUN npm install
RUN npm run build
RUN node dist/server/entry.mjs
