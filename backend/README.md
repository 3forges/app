# The Pesto API


Pesto makes you completely independent from the Technologuy people you pay.

Pesto is cutting edge tehcnology, mainly based on open source

Pesto is a new app to send wordpress back to the jurassic where it belongs.


The pesto API is the backend of Pesto : It consists in a REST API. 


## Contributor guide

### Stack setup

* Install the Loopback CLI : 

```bash
# npm remove -g @loopback/cli
npm i -g @loopback/cli

# ---
# export DESIRED_NODEJS_VERSION=${DESIRED_NODEJS_VERSION:-"18.16.0"}
# export TARGET_OS_DISTRO="linux-x64"
export DESIRED_NODEJS_VERSION=${DESIRED_NODEJS_VERSION:-"18.16.0"}
export TARGET_OS_DISTRO="linux-x64"
sudo ln -s /usr/local/lib/nodejs/node-v${DESIRED_NODEJS_VERSION}-${TARGET_OS_DISTRO}/lib/node_modules/@loopback/cli/bin/cli-main.js /usr/local/bin/lb4

```
* then clone the project and start the backend : 

```bash
# I created the loopback 4 App with : lb4 app pesto
git clone git@github.com:3forges/app.git ./where_i_work/
cd ./where_i_work/backend 
cd pesto/
npm i

export PESTO_DB_HOST="db.pesto.io"
export PESTO_DB_NAME="PestoDb"

# Note: 
# 27117 and 27118 are the Mongo Routers for the Shard: that's 
# why we only hit them, and they route properly the requests
export MONGO_ROUTER01_PORT=27117
export MONGO_ROUTER02_PORT=27118

npm start
```
* and from any other shell : 

```bash
curl -i http://app.pesto.io:3000/ping | tail -n 1 | jq .
```
* Your should get smthg like : 
```bash
$ curl -i http://app.pesto.io:3000/ping | tail -n 1 | jq .
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   163  100   163    0     0    516      0 --:--:-- --:--:-- --:--:--   517
{
  "greeting": "Hello from LoopBack",
  "date": "2023-05-29T22:44:29.488Z",
  "url": "/ping",
  "headers": {
    "host": "app.pesto.io:3000",
    "user-agent": "curl/7.77.0",
    "accept": "*/*"
  }
}

```

* you can also browse http://app.pesto.io:3000/explorer/

* Then I added a new DataSource : 

```bash
mkdir data
touch data/content_types/ds.json

cat <<EOF >./data/content_types/ds.json
{
  "ids": {
    "ContentType": 3
  },
  "models": {
    "ContentType": {
      "1": "{\"title\":\"Things I need to buy\",\"content\":\"milk, cereal, and waffles\",\"id\":1}",
      "2": "{\"title\":\"Great frameworks\",\"content\":\"LoopBack is a great framework\",\"id\":2}"
    }
  }
}
EOF
lb4 datasource ds


```

* Note that I had to run `npm install loopback-connector-mongodb --save`, because the mongodb connector was required
## MongoDB DAtabase


I use this : https://github.com/minhhungit/mongodb-cluster-docker-compose/tree/Feature/Auth/with-keyfile-auth#but-before-you-start-inserting-data-you-should-verify-them-first

It sets up mongo replicaset with mongo 6, and with authentication, they even give the MongoDb connection string (OK IT WORKSSS NOWWW)


Ok so i have one entity, called "content-types": 
* In MongoDB the collection (table) name is `ContentTypes`
* there are also the loopback classes and module names
* And with the source code here, plus the mongodb setup and running as instructed exactly in `backend/database/PESTO.README.md` , I successffully can query the entity like thissss : 

```bash
curl -iv -X GET "http://localhost:3000/content-types" -H 'Content-Type: application/json' -H 'Accept: application/json'| tail -n 1 | jq .
```






## ROADMAP

* blunt rest endpoints : 
  * List all content types (from the `pesto.yaml` config file), for a given git repository, `GET /api/:org_group_or_user/:repo_name/content/types`, the JSON payload is : 

```bash
export PESTO_API_HOST="app.pesto.io"
export PESTO_API_BASEURL="https://app.pesto.io/api"
export GITHUB_REPO_ORG_OR_USER="3forges"
export GITHUB_REPO_NAME="web"
# could be github, gitlab, or gitea, more support coming up
export GIT_SERVICE_ID="github"
# export GIT_SERVICE_ID="gitlab"
# export GIT_SERVICE_ID="gitea"

curl -X GET ${PESTO_API_BASEURL}/content/${GITHUB_REPO_ORG_OR_USER}/${GITHUB_REPO_NAME}/types?pagination=3

cat <<EOF >./get_content_types_json_payload.json
{
    "pagination": 3,
}
EOF
curl -X GET \
  -H "Content-type: application/json" \
  -H "Accept: application/json" \
  -d @./get_content_types_json_payload.json \
  "${PESTO_API_BASEURL}/content/${GITHUB_REPO_ORG_OR_USER}/${GITHUB_REPO_NAME}/types?pagination=3"

``` 


* Having a REST API with only Github authentication, that has the following endpoints : 
  * API BASE URL : https://app.pesto.io/api/
  * List all user's Github project : 
    * To grant authorization to the Pesto Github App, for Pesto to be authorized to do its job.
    * determine the exact autorization to grant, but here are the actions Pesto needs to perform : 
      * create a new SSH key with `ssh-keygen -t rsa -b 4096`, and add it to hte Github User's Keys
      * create a new GPG Key, and add it to the Github User's Keys 
      * git push to the remote repository on github : on all branches, except the master git branch (the bot will create a pull request, which the user will approve from the Pesto Web UI) 
      * must 
  * 

## ETC/HOSTS

```bash
export PESTO_API_HOST="app.pesto.io"
export PESTO_API_HOST_IP="192.168.228.138"
export OLD_IP_TO_REPLACE="192.168.172.138"

echo "# --- " | tee -a /c/Windows/System32/drivers/etc/hosts
echo "# - Pesto App Dev " | tee -a /c/Windows/System32/drivers/etc/hosts
echo "${PESTO_API_HOST_IP}          app.pesto.io" | tee -a /c/Windows/System32/drivers/etc/hosts
echo "${PESTO_API_HOST_IP}          db.pesto.io" | tee -a /c/Windows/System32/drivers/etc/hosts

sed -i "s#${OLD_IP_TO_REPLACE}#${PESTO_API_HOST_IP}#g" /c/Windows/System32/drivers/etc/hosts

```

## ANNEX: References

* Loopback 4 : https://loopback.io/doc/en/lb4/
