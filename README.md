# TSOA Project

## Some changes to tsconfig.json
```
"rootDir": "./src",                /* Specify the root folder within your source files. */
"baseUrl": "./src",                /* Specify the base directory to resolve non-relative module names. */
"sourceMap": true,                 /* Create source map files for emitted JavaScript files. */
"outDir": "./build",               /* Specify an output folder for all emitted files. */
"experimentalDecorators": true,    /* Enable experimental support for TC39 stage 2 draft decorators. */
```
## Some changes to package.json
```
  "scripts": {
      "routes": "tsoa spec-and-routes",
      "build": "tsoa spec-and-routes && tsc --build .",
      "debug": "node --inspect ./build/index.js",
      "start": "node ./build/index.js",
      "clean": "rm -rf ./build"
  }
```

## Docker

### Build
docker build . -t <your username>/node-web-app

### Run
docker run -p 3000:3000 -d <your username>/node-web-app

### Helpful
# Get container ID
$ docker ps

# Print app output
$ docker logs <container id>

# Example
Running on http://localhost:8080

# Enter the container
$ docker ps

# Example
ID            IMAGE                                COMMAND    ...   PORTS
ecce33b30ebf  <your username>/node-web-app:latest  npm start  ...   3000->3000

$ docker exec -it <container id> /bin/bash
