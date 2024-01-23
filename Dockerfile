# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.10.0

FROM node:${NODE_VERSION}-alpine as base

WORKDIR /app

FROM base as deps

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

FROM deps as build

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci


RUN mkdir /app/node_modules/.cache && chmod -R 777 /app/node_modules/.cache

COPY . .

RUN npm run build

FROM base as final

ENV NODE_ENV production

COPY package.json .

COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/ .

EXPOSE 80

CMD npm start
