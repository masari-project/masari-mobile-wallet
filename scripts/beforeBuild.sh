#!/bin/bash

if [ ! -d www ]
then
mkdir www
fi

cd masari-webwallet
npm install
node ./node_modules/typescript/bin/tsc --project tsconfig.prod.json
node build.js
cd ../

cp -r masari-webwallet/src/. www
cp -r src_specific/. www