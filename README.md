# singular2

A brief introduction to Angular 1.x.

## First Run

### Prerequisites

You must have Node installed.

    npm install -g bower grunt-cli tsd@^0.6.0 typescript@^1.5.0-beta # Install required global packages.
    tsd install   # Install local TypeScript packages.

## While Coding

Every time you start coding, run the following command:

    tsc --watch -m commonjs -t es5 --emitDecoratorMetadata app.ts

**Note:** You might have to remove `C:\Program Files (x86)\Microsoft SDKs\TypeScript\1.0\`
from the `PATH` environment variable.
