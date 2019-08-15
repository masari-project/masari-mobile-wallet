#!/bin/bash

if [ ! -d www ]
then
mkdir www
fi

cd masari-webwallet
npm install
nodejs ./node_modules/typescript/bin/tsc --project tsconfig.prod.json
nodejs build.js
cd ../

cp -r masari-webwallet/src/. www
cp -r src_specific/. www
