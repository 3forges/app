#!/bin/bash

export DESIRED_NODEJS_VERSION=${DESIRED_NODEJS_VERSION:-"18.16.0"}
export TARGET_OS_DISTRO="linux-x64"




# if [ -f ./v${DESIRED_NODEJS_VERSION}.tar.gz ]; then
# node-v${DESIRED_NODEJS_VERSION}-linux-x64.tar.xz
if [ -f ./node-v${DESIRED_NODEJS_VERSION}-linux-x64.tar.xz ]; then
  # ls -alh ./v${DESIRED_NODEJS_VERSION}.tar.gz || true
  ls -alh node-v${DESIRED_NODEJS_VERSION}-linux-x64.tar.xz || true
  echo "INFO: [./v${DESIRED_NODEJS_VERSION}.tar.gz] already downloaded"
else
  curl -LO https://nodejs.org/dist/v${DESIRED_NODEJS_VERSION}/node-v${DESIRED_NODEJS_VERSION}-linux-x64.tar.xz
  # https://github.com/nodejs/node/archive/refs/tags/v${DESIRED_NODEJS_VERSION}.tar.gz
fi;




if [ -f /usr/local/lib/nodejs ]; then
  sudo rm /usr/local/lib/nodejs
fi;

if [ -d /usr/local/lib/nodejs ]; then
  sudo rm -fr /usr/local/lib/nodejs
fi;

sudo mkdir -p /usr/local/lib/

# VERSION=v10.15.0
# DISTRO=linux-x64
sudo mkdir -p /usr/local/lib/nodejs

# sudo tar -xzvf v${DESIRED_NODEJS_VERSION}.tar.gz -C /usr/local/lib/nodejs
sudo tar -xJvf node-v${DESIRED_NODEJS_VERSION}-${TARGET_OS_DISTRO}.tar.xz -C /usr/local/lib/nodejs





if [ -f /usr/local/bin/node ]; then
  sudo rm /usr/local/bin/node
fi;

if [ -d /usr/local/bin/node ]; then
  sudo rm -fr /usr/local/bin/node
fi;

sudo mkdir -p /usr/local/bin/
sudo ln -s /usr/local/lib/nodejs/node-v${DESIRED_NODEJS_VERSION}-${TARGET_OS_DISTRO}/bin/node /usr/local/bin/node




if [ -f /usr/local/bin/npm ]; then
  sudo rm /usr/local/bin/npm
fi;

if [ -d /usr/local/bin/npm ]; then
  sudo rm -fr /usr/local/bin/npm
fi;

sudo mkdir -p /usr/local/bin/
sudo ln -s /usr/local/lib/nodejs/node-v${DESIRED_NODEJS_VERSION}-${TARGET_OS_DISTRO}/bin/npm /usr/local/bin/npm







if [ -f /usr/local/bin/npx ]; then
  sudo rm /usr/local/bin/npx
fi;

if [ -d /usr/local/bin/npx ]; then
  sudo rm -fr /usr/local/bin/npx
fi;

sudo mkdir -p /usr/local/bin/
sudo ln -s /usr/local/lib/nodejs/node-v${DESIRED_NODEJS_VERSION}-${TARGET_OS_DISTRO}/bin/npx /usr/local/bin/npx


