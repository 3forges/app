ARG PESTO_NODE_VERSION=20.2.0
ARG PROD_OCI_IMG_TAG=${PESTO_NODE_VERSION}-alpine3.16

# 1st Stage for installing dependencies
FROM node:${PESTO_NODE_VERSION}-bullseye-slim AS build-deps
RUN mkdir -p /build/
# COPY package*.json /build/
COPY backend/pesto/package*.json /build/
WORKDIR /build
RUN npm install

# 2nd Stage for compiling typescript
FROM node:${PESTO_NODE_VERSION}-bullseye-slim AS compile-env
RUN mkdir /compile
COPY --from=build-deps /build /compile
WORKDIR /compile
COPY backend/pesto/ .
# put your npm script to compile typescript
RUN npm run build


# 3rd Stage for installing runtime dependencies
FROM node:${PESTO_NODE_VERSION}-bullseye-slim AS app-runtime-dependencies
RUN mkdir -p /build/
# COPY package*.json /build/
COPY backend/pesto/package*.json /build/
WORKDIR /build
# RUN npm install --production
# npm WARN config production Use `` instead.
# npm WARN deprecated stable@0.1.8: Modern JS already guarantees Array#sort() is a stable sort, so this library is deprecated. See the compatibility table on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#browser_compatibility
# RUN npm install --omit=dev
RUN npm install


# 4th Stage for installing/setting up runtime linux system 
FROM "node:${PROD_OCI_IMG_TAG}" AS runtime-linux
RUN apk update && apk add --no-cache bash curl wget
ARG PESTO_LX_USER
ARG PESTO_LX_USER_GRP
ARG PESTO_LX_UID
ARG PESTO_LX_GID
COPY backend/oci/create-lx-user.alpine.sh .
COPY ./.prod.env.sh .
# For the moment, the linux user is created, but absolutely not used
RUN chmod +x ./create-lx-user.alpine.sh && source ./.prod.env.sh && ./create-lx-user.alpine.sh
RUN mkdir -p /pesto/app && mkdir -p /pesto/.secrets/ && chown node:node /pesto

# Final Stage for running application
FROM runtime-linux AS runtime-env
WORKDIR /pesto
# copy compiled artifacts from compile-env
COPY --from=compile-env --chown=node:node /compile/dist/ /pesto/app
# copy production dependencies
COPY --from=app-runtime-dependencies --chown=node:node /build/ /pesto/app
# copy config/ folder if you are using node-config
# COPY --chown=node:node config /backend/pesto/config
USER node
ARG PESTO_API_HTTPS_PORT=9043
ENV PESTO_API_HTTPS_PORT=$PESTO_API_HTTPS_PORT
EXPOSE $PESTO_API_HTTPS_PORT
CMD [ "node", "server.js" ]