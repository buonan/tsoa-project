#!/bin/bash
yarn init -y

# Add our dependencies
yarn add tsoa express body-parser
yarn add -D typescript @types/node @types/express @types/body-parser

# Initialize tsconfig.json
yarn run tsc --init

# Initialize tsoa and typescript
echo "
{
  \"entryFile\": \"src/index.ts\",
  \"noImplicitAdditionalProperties\": \"throw-on-extras\",
  \"controllerPathGlobs\": [\"src/**/*.controller.ts\"],
  \"spec\": {
    \"outputDirectory\": \"./src\",
    \"specVersion\": 3
  },
  \"routes\": {
    \"routesDir\": \"./src\"
  }
}" > tsoa.json
