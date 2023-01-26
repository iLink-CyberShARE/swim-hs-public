# SWIM-HS Bridge Service
Node js microservice to authenticate with the Hydroshare platform using OAuth 2.0 mechanism.

## Features
+ OAUTH2 Authentication
- Supports authorization grant type: Authentication Code
- Auth retrieval redirects to a target url with added path: /token/expiration
- Does not support refresh token

## Build and Run

### Option 1: Docker Compose File
1. Download the docker-composer.yml file to a path in your machine.   
2. Install Docker and Docker composer on your target machine.   
3. Setup your docker account at: https://www.docker.com/get-started   
4. Configure the docker-composer file with your own app settings.   
5. Run docker compose: $docker-compose up   
5a. Use -d option on the composer command to run on the background.   
6. Swagger docs available at http://localhost:6030/api-docs

### Option 2: Build Docker Container
1. Download this repository into a folder on your machine.
2. Install Docker and Docker composer on your target machine.
3. Setup your docker account at: https://www.docker.com/get-started
4. Using a command line or terminal navigate to the base path of the project.
5. Build the image: $docker build -t swim-hs:latest .
6. Run the container: $docker run -p 3000:3000 swim-hs
7. Swagger docs available at http://localhost:3000/api-docs

### Option 3: Native
1. Install Node.js for your platform (MacOS, Windows or Linux)
2. Download or clone repo to a folder
3. Open terminal with path on project folder (or use visual studio)
4. Install dependencies from package.json: $npm install
5. Run app: $node server.js
6. Swagger docs available at http://localhost:3000/api-docs

## How to use

+ Use the login endpoint directly to redirect to authentication webpage at the path /api/hs-auth/login
+ After authentication, the callback endpoint will retrieve token from auth server.
+ If the token is retrieved successfully, you will be redirected to the 
url of choice with the following url endings /token/expiration-time

## Contributors
Luis A Garnica Chavira - UTEP

## Collaborators
Scott Black - Hydroshare

## Citations

Horsburgh, J. S., Morsy, M. M., Castronova, A. M., Goodall, J. L., Gan, T., Yi, H., Stealey, M. J., & Tarboton, D. G. (2016). HydroShare: Sharing Diverse Environmental Data Types and Models as Social Objects with Application to the Hydrology Domain. JAWRA Journal of the American Water Resources Association, 52(4), 873–889. https://doi.org/10.1111/1752-1688.12363    

## Acknowledgements
This material is based upon work supported by the National Science Foundation (NSF) under Grant No. 1835897.   

Any opinions, findings, and conclusions or recommendations expressed in this material are those of the author(s) and do not necessarily reflect the views of the National Science Foundation.  

## License
This software code is licensed under the [GNU GENERAL PUBLIC LICENSE v3.0](./LICENSE) and uses third party libraries that are distributed under their own terms (see [LICENSE-3RD-PARTY.md](./LICENSE-3RD-PARTY.md)).

## Copyright
© 2019-2023 - University of Texas at El Paso (SWIM Project).





