

```bash
docker-compose up -d
```

## Install minio cli debian

* `GNU/Linux` : 
```bash
curl https://dl.min.io/client/mc/release/linux-amd64/mc \
  --create-dirs \
  -o $HOME/minio-binaries/mc

chmod +x $HOME/minio-binaries/mc
export PATH=$PATH:$HOME/minio-binaries/

mc --help
```

* `Windows` (via git bash) : 

```bash
curl -LO https://dl.min.io/client/mc/release/windows-amd64/mc.exe
./mc.exe  --help


mkdir -p ~/.minio-cli/bin/

cp ./mc.exe ~/.minio-cli/bin/

export PATH="${PATH}:~/.minio-cli/bin"


echo '# ---' | tee -a ~/.bashrc | tee -a ~/.bash_profile | tee -a ~/.profile
echo '# Minio CLI' | tee -a ~/.bashrc | tee -a ~/.bash_profile | tee -a ~/.profile
echo 'export PATH="${PATH}:~/.minio-cli/bin"' | tee -a ~/.bashrc | tee -a ~/.bash_profile | tee -a ~/.profile

```

* Configuration of the `minio` cli : 

```bash

export MINIO_USER="minioadmin"
export MINIO_PASSWORD="minioadmin"
export MINIO_HOST="minio.pokus.io"
export PESTO_MINIO_PROFILE="pesto"

cat <<EOF >~/.mc/config.json
{
        "version": "10",
        "aliases": {
                "gcs": {
                        "url": "https://storage.googleapis.com",
                        "accessKey": "YOUR-ACCESS-KEY-HERE",
                        "secretKey": "YOUR-SECRET-KEY-HERE",
                        "api": "S3v2",
                        "path": "dns"
                },
                "${PESTO_MINIO_PROFILE}": {
                        "url": "http://${MINIO_HOST}:9000",
                        "accessKey": "${MINIO_USER}",
                        "secretKey": "${MINIO_PASSWORD}",
                        "api": "S3v4",
                        "path": "auto"
                },
                "play": {
                        "url": "https://play.min.io",
                        "accessKey": "Q3AM3UQ867SPQQA43P2F",
                        "secretKey": "zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG",
                        "api": "S3v4",
                        "path": "auto"
                },
                "s3": {
                        "url": "https://s3.amazonaws.com",
                        "accessKey": "YOUR-ACCESS-KEY-HERE",
                        "secretKey": "YOUR-SECRET-KEY-HERE",
                        "api": "S3v4",
                        "path": "dns"
                }
        }
}
EOF

mc ls ${PESTO_MINIO_PROFILE}

```

* To Sync from your machine to the `minio` : 

```bash
# ---
# ${PESTO_MINIO_PROFILE}
export PESTO_MINIO_PROFILE="pesto"
export BUCKET_NAME="testjb"
mc mirror --watch $(pwd)/rep_sur_win/ ${PESTO_MINIO_PROFILE}/${BUCKET_NAME}

export PESTO_MINIO_PROFILE="pesto"
export BUCKET_NAME="from_debian"
mc mirror --watch $(pwd)/rep_sur_win/ ${PESTO_MINIO_PROFILE}/${BUCKET_NAME}

```

* To sync from minio to your machine : 


```bash
# ---
# ${PESTO_MINIO_PROFILE}
export PESTO_MINIO_PROFILE="pesto"
export PATH_TO_WD=$(pwd)
export PATH_TO_WD=$(echo ${PATH_TO_WD} | sed 's#/c/#/C:/#g' )
echo "  PATH_TO_WD=[${PATH_TO_WD}]"

mc mirror --debug -a ${PESTO_MINIO_PROFILE}/testjb${PATH_TO_WD}/rep_sur_win $(pwd)/optique
# --- 
# - The [-a] option tells mc to preserve file attributes, which is 
# - a problem when windos and linux machines ping pong files to each other
#
# mc mirror --debug -a ${PESTO_MINIO_PROFILE}/testjb/C:/Users/Utilisateur/transit_pesto/rep_sur_win $(pwd)/optique

```
* To get stats info about it : 

```bash
mc stats pesto/testjb
```


#### An issue about filesystem windows/linux

Ok I found something.

I had one error, with the following scenario : 

And here are the error logs :

```bash
jbl@pokus1:~/reciproque$ mc mirror -w ${PESTO_MINIO_PROFILE}/testjb $(pwd)/optique
.../rep_sur_win/README.pesto.md: 144 B / 144 B ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 5.01 KiB/smc: <ERROR> Failed to copy `http://minio.pokus.io:9000/testjb/README.prusses.md`. Error in parsing file system attribute
mc: <ERROR> Failed to copy `http://minio.pokus.io:9000/testjb/C:/Users/Utilisateur/transit_pesto/rep_sur_win/README.pesto.md`. Error in parsing file system attribute
mc: <ERROR> Failed to copy `http://minio.pokus.io:9000/testjb/README.pesto.md`. Error in parsing file system attribute
...:9000/testjb/README.pesto.md: 144 B / 144 B ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 8 B/s^Cjbl@pokus1:~/reciproque$ rm -fr $(pwd)/optique

```







* That's the stats for a file uploaded to `minio` from windows:

```bash
jbl@pokus1:~/from_debian$ mc stat pesto/testjb/C:/Users/Utilisateur/transit_pesto/rep_sur_win/README.pesto.md
Name      : README.pesto.md
Date      : 2023-06-17 00:23:16 CEST
Size      : 72 B
ETag      : fab56f462375dcb7dcd151b03aab0e84
Type      : file
Metadata  :
  X-Amz-Meta-Uid            : 1000
  X-Amz-Meta-Mode           : 33188
  X-Amz-Meta-Uname          : jbl
  X-Amz-Meta-Gid            : 1000
  X-Amz-Meta-Mc-Attrs       :
  X-Amz-Meta-Mm-Source-Mtime: 2023-06-16T23:44:16.2449642+02:00
  Content-Type              : text/markdown
  X-Amz-Meta-Gname          : jbl

```

* That's the stats for a markdown file i uploaded to `minio` from debian:
```bash
jbl@pokus1:~/from_debian$ mc stat pesto/fromdebian/un.md
Name      : un.md
Date      : 2023-06-17 00:05:26 CEST
Size      : 13 B
ETag      : 4cbb28b870cfc0b1a6a077a0a41b9c7d
Type      : file
Metadata  :
  Content-Type              : text/markdown
  X-Amz-Meta-Mc-Attrs       : atime:1686953126#323091789/gid:1000/gname:jbl/mode:33188/mtime:1686953126#323091789/uid:1000/uname:jbl
  X-Amz-Meta-Mm-Source-Mtime: 2023-06-17T00:05:26.323091789+02:00

jbl@pokus1:~/from_debian$

```

Do you see the difference ?

It's in the `X-Amz-Meta-Mc-Attrs` : 
* a file uploaded from `GNU/Linux`, does have a non empty string value for `X-Amz-Meta-Mc-Attrs` HTTP Header.
* a file uploaded from `GNU/Linux`, does have an empty string value for the `X-Amz-Meta-Mc-Attrs` HTTP Header.


I will use the `--attr` option to force setting some HTTP Headers, understand how `--attr` behaves, and finally force settng a value for `X-Amz-Meta-Mc-Attrs` : 

* I will now upload my files from windows (git bash) with :
```bash

export MC_ATTRS="atime:$(date +%s)#323091789/gid:1000/gname:jbl/mode:33188/mtime:$(date +%s)#323091789/uid:1000/uname:jbl"
export META_PESTO="Pesto1=greenIsTheTradition;Pesto2=redTastesDifferent;Mc-Attrs=${MC_ATTRS}"
mc mirror --debug --attr "${META_PESTO}" --watch $(pwd)/rep_sur_win/ pesto/testjb/


```

* And on the `GNU/Linux`, when I download the files, I do not have any error at all anymore :100: :fire: : 

```bash
export PESTO_MINIO_PROFILE='pesto'
# [$(pwd)/optique]: just any folder you choose, on the machine
mc mirror -w ${PESTO_MINIO_PROFILE}/testjb $(pwd)/optique
```

```bash
export MC_ATTRS="atime:$(date +%s)#323091789/gid:1000/gname:jbl/mode:33188/mtime:$(date +%s)#323091789/uid:1000/uname:jbl"
export META_PESTO="Mc-Attrs=${MC_ATTRS}"
mc mirror --debug --attr "${META_PESTO}" --watch $(pwd)/rep_sur_win/ pesto/testjb/
```

* And look how the HTTP HEaders changed :

```bash

$ mc mirror --remove --debug --attr "${META_PESTO}" --watch $(pwd)/rep_sur_win/ pesto/testjb/
mc: <DEBUG> GET /testjb/?location= HTTP/1.1
Host: minio.pokus.io:9000
User-Agent: MinIO (windows; amd64) minio-go/v7.0.40 mc/RELEASE.2022-10-06T01-20-06Z
Authorization: AWS4-HMAC-SHA256 Credential=minioadmin/20230617/us-east-1/s3/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date, Signature=**REDACTED**
X-Amz-Content-Sha256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
X-Amz-Date: 20230617T000738Z
Accept-Encoding: gzip

mc: <DEBUG> HTTP/1.1 200 OK
Content-Length: 128
Accept-Ranges: bytes
Connection: keep-alive
Content-Security-Policy: block-all-mixed-content
Content-Type: application/xml
Date: Sat, 17 Jun 2023 00:07:38 GMT
Server: nginx/1.19.2
Strict-Transport-Security: max-age=31536000; includeSubDomains
Vary: Origin
Vary: Accept-Encoding
X-Amz-Id-2: e0c385c033c4356721cc9121d3109c9b9bfdefb22fd2747078acd22328799e36
X-Amz-Request-Id: 1769499979FF585F
X-Content-Type-Options: nosniff
X-Xss-Protection: 1; mode=block

mc: <DEBUG> Response Time:  7.9689ms

mc: <DEBUG> GET /testjb/?delimiter=&encoding-type=url&fetch-owner=true&list-type=2&metadata=true&prefix=%2F HTTP/1.1
Host: minio.pokus.io:9000
User-Agent: MinIO (windows; amd64) minio-go/v7.0.40 mc/RELEASE.2022-10-06T01-20-06Z
Authorization: AWS4-HMAC-SHA256 Credential=minioadmin/20230617/us-east-1/s3/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date, Signature=**REDACTED**
X-Amz-Content-Sha256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
X-Amz-Date: 20230617T000738Z
Accept-Encoding: gzip

mc: <DEBUG> HTTP/1.1 200 OK
Content-Length: 270
Accept-Ranges: bytes
Connection: keep-alive
Content-Security-Policy: block-all-mixed-content
Content-Type: application/xml
Date: Sat, 17 Jun 2023 00:07:38 GMT
Server: nginx/1.19.2
Strict-Transport-Security: max-age=31536000; includeSubDomains
Vary: Origin
Vary: Accept-Encoding
X-Amz-Id-2: 4de9f6f45bfb3a31ea395f3d063545f58e6a1995d2b05dee6b579f19079a6455
X-Amz-Request-Id: 176949997A30D446
X-Content-Type-Options: nosniff
X-Xss-Protection: 1; mode=block

mc: <DEBUG> Response Time:  3.6221ms

`C:/Users/Utilisateur/transit_pesto/rep_sur_win/README.pesto.md` -> `pesto/testjb/C:/Users/Utilisateur/transit_pesto/rep_sur_win/README.pesto.md`
`C:/Users/Utilisateur/transit_pesto/rep_sur_win/README.prusses.md` -> `pesto/testjb/C:/Users/Utilisateur/transit_pesto/rep_sur_win/README.prusses.md`
mc: <DEBUG> PUT /testjb//C%3A/Users/Utilisateur/transit_pesto/rep_sur_win/README.prusses.md HTTP/1.1
Host: minio.pokus.io:9000
User-Agent: MinIO (windows; amd64) minio-go/v7.0.40 mc/RELEASE.2022-10-06T01-20-06Z
Content-Length: 251
Authorization: AWS4-HMAC-SHA256 Credential=minioadmin/20230617/us-east-1/s3/aws4_request,SignedHeaders=host;x-amz-content-sha256;x-amz-date;x-amz-decoded-content-length;x-amz-meta-mc-attrs;x-amz-meta-mm-source-mtime,Signature=**REDACTED**
Content-Type: text/markdown
X-Amz-Content-Sha256: STREAMING-AWS4-HMAC-SHA256-PAYLOAD
X-Amz-Date: 20230617T000738Z
X-Amz-Decoded-Content-Length: 78
X-Amz-Meta-Mc-Attrs: atime:1686959271#323091789/gid:1000/gname:jbl/mode:33188/mtime:1686959271#323091789/uid:1000/uname:jbl
X-Amz-Meta-Mm-Source-Mtime: 2023-06-17T01:30:06.8362712+02:00
Accept-Encoding: gzip

mc: <DEBUG> HTTP/1.1 200 OK
Content-Length: 0
Accept-Ranges: bytes
Connection: keep-alive
Content-Security-Policy: block-all-mixed-content
Date: Sat, 17 Jun 2023 00:07:39 GMT
Etag: "b50dec8f0d005df11730509ccc4975d0"
Server: nginx/1.19.2
Strict-Transport-Security: max-age=31536000; includeSubDomains
Vary: Origin
Vary: Accept-Encoding
X-Amz-Id-2: 46efbbb7efbd81c7d995bde03cc6fabf60c12f80d4e074c1c972dbc4d583c3d4
X-Amz-Request-Id: 176949997C68587A
X-Content-Type-Options: nosniff
X-Xss-Protection: 1; mode=block

mc: <DEBUG> Response Time:  39.1612ms

mc: <DEBUG> PUT /testjb//C%3A/Users/Utilisateur/transit_pesto/rep_sur_win/README.pesto.md HTTP/1.1
Host: minio.pokus.io:9000
User-Agent: MinIO (windows; amd64) minio-go/v7.0.40 mc/RELEASE.2022-10-06T01-20-06Z
Content-Length: 245
Authorization: AWS4-HMAC-SHA256 Credential=minioadmin/20230617/us-east-1/s3/aws4_request,SignedHeaders=host;x-amz-content-sha256;x-amz-date;x-amz-decoded-content-length;x-amz-meta-mc-attrs;x-amz-meta-mm-source-mtime,Signature=**REDACTED**
Content-Type: text/markdown
X-Amz-Content-Sha256: STREAMING-AWS4-HMAC-SHA256-PAYLOAD
X-Amz-Date: 20230617T000738Z
X-Amz-Decoded-Content-Length: 72
X-Amz-Meta-Mc-Attrs: atime:1686959271#323091789/gid:1000/gname:jbl/mode:33188/mtime:1686959271#323091789/uid:1000/uname:jbl
X-Amz-Meta-Mm-Source-Mtime: 2023-06-16T23:44:16.2449642+02:00
Accept-Encoding: gzip

mc: <DEBUG> HTTP/1.1 200 OK
Content-Length: 0
Accept-Ranges: bytes
Connection: keep-alive
Content-Security-Policy: block-all-mixed-content
Date: Sat, 17 Jun 2023 00:07:39 GMT
Etag: "fab56f462375dcb7dcd151b03aab0e84"
Server: nginx/1.19.2
Strict-Transport-Security: max-age=31536000; includeSubDomains
Vary: Origin
Vary: Accept-Encoding
X-Amz-Id-2: 87ef3db1a67a60b69bcfee10c0874f8a253fc9bc1bf4e58d7314742c975c4eb6
X-Amz-Request-Id: 176949997C969B57
X-Content-Type-Options: nosniff
X-Xss-Protection: 1; mode=block

mc: <DEBUG> Response Time:  40.5294ms



```