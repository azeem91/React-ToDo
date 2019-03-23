# React-Simple-seed
React Redux To-do app

## TODO
 - [ ] Eslint config
 - [ ] Multi env. config
 - [ ] Add Redux
 - [x] Add Typescript
 - [ ] Add Testing framework
 - [x] Add Scss
 - [ ] Add Docker
 - [ ] Add PM2 config with docker
 - [ ] Pre-rendering (react-snap/ react-snapshot)
 - [ ] react-helmet
 - [x] node server pm2

 ## Start react dev server
 - ```yarn | npm i```    
 - ```yarn start | npm run start``` Start dev server
 - ```yarn build | npm run build``` make build

 ## Start node server
 - ```yarn | npm i```               Install node packages
 - ```yarn build | npm run build``` build react app
 - ```<PORT=XXXX> node server.js``` Start server Default port is 3000 
 - For local testing of server run ```yarn serve | npm run serve```

 ## Start server in cluster mode with PM2
 - ```yarn | npm i```    
 - ```npm i -g pm2```
 - you can also use ```yarn servepm2 | npm run servepm2``` to start server for production on all avalible cpus performance optimization and high availabilty