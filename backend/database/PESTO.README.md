# How to launch

## (Optional) Generate / Rotate key for mongo auth

```bash

cd ~/private_3forges_backend
cd backend/database/with-keyfile-auth/

openssl rand -base64 700 > ./new.mongodb-keyfile

if [ -f ./mongodb-build/auth/mongodb-keyfile ]; then 
  cp ./mongodb-build/auth/mongodb-keyfile ./mongodb-build/auth/mongodb-keyfile.previous
  rm ./mongodb-build/auth/mongodb-keyfile
fi;

cp ./new.mongodb-keyfile ./mongodb-build/auth/mongodb-keyfile

# --- # --- # --- # --- # --- # --- # --- # --- # --- #--- # 
# - Then Force Rebuild the docker image
# --- # --- # --- # --- # --- # --- # --- # --- # --- #--- # 
docker-compose up -d --build
```


## Run the containers

```bash
docker-compose up -d
# --- # --- # --- # --- # --- # --- # --- # --- # --- #--- # 
# - OrForce Rebuild the docker image, if you generated a new key
# --- # --- # --- # --- # --- # --- # --- # --- # --- #--- # 
# docker-compose up -d --build
```
## Configure and initialize the Sharded MongoDB ReplicaSet

* Execute : 

```bash
#!/bin/bash

cd ~/private_3forges_backend
cd backend/database/with-keyfile-auth/

docker-compose up -d
docker ps -a
docker-compose exec configsvr01 bash "chmod +x /scripts/init-configserver.js && /scripts/init-configserver.js"
docker-compose exec shard01-a bash "chmod +x /scripts/init-shard01.js && /scripts/init-shard01.js"
docker-compose exec shard02-a bash "chmod +x /scripts/init-shard02.js && /scripts/init-shard02.js"
docker-compose exec shard03-a bash "chmod +x /scripts/init-shard03.js && /scripts/init-shard03.js"
docker-compose exec router01 sh -c "chmod +x /scripts/init-router.js && mongosh < /scripts/init-router.js"
docker-compose exec configsvr01 bash "chmod +x /scripts/auth.js && /scripts/auth.js"
docker-compose exec shard01-a bash "chmod +x /scripts/auth.js && /scripts/auth.js"
docker-compose exec shard02-a bash "chmod +x /scripts/auth.js && /scripts/auth.js"
docker-compose exec shard03-a bash "chmod +x /scripts/auth.js && /scripts/auth.js"
ls -alh ./scripts/auth.js
chmod +x ./scripts/auth.js

# ---
# This last command will send you into an interactive mongo shell inside the container
docker-compose exec router01 mongosh --port 27017 -u "your_admin" --authenticationDatabase admin

```
 
##  Creating the Database and one sharded Collection into thee MongoDb Sharded ReplicaSet 

* Run :
```bash
# ---
# Execute : 
#      docker-compose exec router01 mongosh --port 27017
# to interactively dive into the mongo shell and execute : 

// Enable sharding for database `MyDatabase`
sh.enableSharding("MyDatabase")

// Setup shardingKey for collection `MyCollection`**
db.adminCommand( { shardCollection: "MyDatabase.MyCollection", key: { oemNumber: "hashed", zipCode: 1, supplierId: 1 } } )


// Enable sharding for database `MyDatabase`
sh.enableSharding("PestoDb")

db.adminCommand( { shardCollection: "PestoDb.ContentTypes", key: { oemNumber: "hashed", name: 1 } } )

```
* After That, I can connect to the MongoDB from code, using the following Mongo DB Connection String : 

```bash
mongodb://your_admin:your_password@127.0.0.1:27117,127.0.0.1:27118/?authMechanism=DEFAULT
```