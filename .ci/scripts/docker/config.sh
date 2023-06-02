#!/bin/bash

echo "  PESTO_CI_DOCKER_AUTH_TOKEN=[${PESTO_CI_DOCKER_AUTH_TOKEN}]"
export PESTO_CI_DOCKER_AUTH_TOKEN="${PESTO_CI_DOCKER_AUTH_TOKEN}"
cat <<EOF >./.pesto.ci.docker.config.json
{
    "auths": {
    "https://index.docker.io/v1/": {
        "auth": "${PESTO_CI_DOCKER_AUTH_TOKEN}"
    }
    }
}
EOF

ls -alh ./.pesto.ci.docker.config.json

mkdir -p ~/.docker/

cat ./.pesto.ci.docker.config.json | tee ~/.docker/config.json