# Pull official Node JS Image - w/Alpine OS
FROM node:18.4-alpine3.15

# install dumb-init package from alpine repo
RUN apk add dumb-init

# Set production env variable
ENV NODE_ENV production

# set the working directory to /swim-api
WORKDIR /swim-hs

# copy as node user owner
COPY --chown=node:node . /swim-hs

# install npm dependencies
RUN npm install

# use user node (TODO: permission problem here)
USER node

# run the node application
CMD ["dumb-init", "node", "server.js"]

# Application default port
EXPOSE 3000
