FROM node:22-bullseye-slim
ARG ASTRO_DATABASE_FILE
ARG PORT
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV HOST="0.0.0.0"

RUN corepack enable
COPY . /app
WORKDIR /app

RUN pnpm install --prod --frozen-lockfile
RUN pnpm run build
RUN ls -lh .

EXPOSE 80
CMD ["node", "dist/server/entry.mjs"]
