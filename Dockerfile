# syntax=docker/dockerfile:1

FROM node:18-alpine
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app
COPY . /app

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm i
RUN pnpm build

EXPOSE 5173
CMD [ "pnpm", "dev" ]
