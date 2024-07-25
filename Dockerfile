FROM node:alpine
RUN touch /srv/files/database.db
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
RUN node dist/server/entry.mjs
