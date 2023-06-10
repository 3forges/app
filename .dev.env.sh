#!/bin/sh

export PESTO_MONGODB_USER=root
export PESTO_MONGODB_PASSWORD=123456
export PESTO_MONGODB_DATABASE=PestoDb
export PESTO_MONGODB_LOCAL_PORT=7017
export PESTO_MONGODB_DOCKER_PORT=27017
# ---
# https://hub.docker.com/_/mongo/tags?page=1&name=6
export PESTO_MONGODB_OCI_TAG=6.0.6

# --

export PESTO_LX_USER=pesto
export PESTO_LX_PASSWORD=pesto
export PESTO_LX_UID=1001
export PESTO_LX_GID=1001
export PESTO_API_ROOT_USER=pesto
export PESTO_API_ROOT_PASSWORD=pesto
export PESTO_API_HOST=app.pesto.io
export PESTO_API_BASE_URL=/api
export PESTO_API_HTTPS_PORT=9043
export PESTO_API_HTTP_PORT=9033
export PESTO_API_HTTPS_PORT_EXT=9043
export PESTO_API_HTTP_PORT_EXT=9033
export PESTO_SECRETS_FILE=/pesto/.secrets/.secrets.json

export DOCKER_IMG_TAG="0.0.1-dev"
export DOCKER_IMG_ORGNAME=pestooci
export DOCKER_IMG_BACK_NAME=pesto-api
export DOCKER_IMG_FRONT_NAME=pesto-web