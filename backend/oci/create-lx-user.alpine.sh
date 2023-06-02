#!/bin/bash

echo "PESTO_LX_USER: ${PESTO_LX_USER}"
echo "PESTO_LX_USER_GRP: ${PESTO_LX_USER_GRP}"
# echo "PESTO_LX_PASSWORD: ${PESTO_LX_PASSWORD}"
echo "PESTO_LX_UID: ${PESTO_LX_UID}"
echo "PESTO_LX_GID: ${PESTO_LX_GID}"


# To create a non root group and user inside your Alpine based Dockerfile

# -g is the GID
addgroup -g ${PESTO_LX_GID} ${PESTO_LX_USER_GRP}



mkdir -p /home/${PESTO_LX_USER}

# create user in group
adduser -u ${PESTO_LX_UID} -G ${PESTO_LX_USER_GRP} -D "${PESTO_LX_USER}" -s /bin/bash  -h "/home/${PESTO_LX_USER}"



# -u is the UID
# -D permits to create an user without password
# adduser -u ${PESTO_LX_UID} -G groupname -h /home/${PESTO_LX_USER} -D ${PESTO_LX_USER}