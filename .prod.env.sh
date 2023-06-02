#!/bin/sh

export MONGODB_USER=pesto
export MONGODB_PASSWORD=pesto123456
export MONGODB_DATABASE=PestoDb
export MONGODB_LOCAL_PORT=7017
export MONGODB_DOCKER_PORT=27017

export PESTO_LX_USER=pesto
export PESTO_LX_PASSWORD=pesto
export PESTO_LX_UID=1000
export PESTO_LX_GID=1000
export PESTO_API_ROOT_USER=pesto
export PESTO_API_ROOT_PASSWORD=pesto
export PESTO_API_HOST=app.pesto.io
export PESTO_API_BASE_URL=/api
export PESTO_API_HTTPS_PORT=9043
export PESTO_API_HTTP_PORT=9033
export PESTO_API_HTTPS_PORT_EXT=9043
export PESTO_API_HTTP_PORT_EXT=9033
export PESTO_SECRETS_FILE=/pesto/.secrets/.secrets.json