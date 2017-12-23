# Piccadilly

This project is a vanilla JS modules scaffold.

## System Requirements

1. NodeJS
1. NPM
1. Docker (optional)

## Active Development

The development containers utilize webpack 2.0 with hot reloading so as you edit static frontend files the browser updates.

```
# clone frontend
git clone git@github.com:lgensinger/piccadilly.git

# cd into project
cd piccadilly
```

### With Docker

```
# build docker images/run containers
docker-compose -f piccadilly.dev.yml up
```

### Without Docker

```
# install dependencies
npm install

# build/run webpack dev server
npm start
```

## Build for Deployment

Includes the minification/JavaScript transpiling into static files for hosting elsewhere.

```
# clone frontend
git clone git@github.com:lgensinger/piccadilly.git

# cd into project
cd piccadilly
```

### With Docker

```
# build docker images/run containers
docker-compose -f piccadilly.build.yml up
```

### Without Docker

```
# build app into static files
npm run build
```