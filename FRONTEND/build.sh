#!/usr/bin/env bash

# On admet que l'appli est déjà créée sur heroku

reponame="tp05-malfara-elio"
path_index_php=../BACKEND/api/index.php

rm -rf build/
mkdir build
mkdir build/api
cp -r $path_index_php build/api/
cp -r vendor/ build/
cp .htaccess build/
cp composer.json build/
cp composer.lock build/
cp composer.phar build/ # pas obligatoire
cp composer.sh build/ # pas obligatoire
cp .gitignore build/

cd build/
git init
heroku git:remote -a $reponame
git add .
git commit -m "init"
git push heroku master --force

cd ..
ng build
cp dist/FRONTEND/* build/
cd build/
git add .
git commit -m "ajout angular"
git push heroku master