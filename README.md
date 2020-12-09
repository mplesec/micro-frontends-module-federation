# Micro frontends module federation
Example of an approach to micro frontends using Webpack's module federation.

# Getting Started
```
yarn
yarn start:dev
```

Open [http://localhost:8081](http://localhost:8081).

You can also open any of the micro frontend apps on their respective ports.

Running `yarn start:dev` is simplest because it runs a webpack dev server for
each app. You can run `yarn:start` which will build and serve each app in
separate processes.

Or you can only build all of the apps with `yarn build`, and cd into the
orchestrator app to serve only that app.

# Prior art

Many things from [WP5 intro video code](https://github.com/jherr/wp5-intro-video-code/)

Minor things from [Micro frontends demo](https://github.com/micro-frontends-demo)
