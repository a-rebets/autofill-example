FROM node:alpine
RUN mkdir -p /srv/files
RUN touch /srv/files/database.db
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
RUN node dist/server/entry.mjs
