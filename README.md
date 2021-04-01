<p align="center">
  <img src="https://github.com/nahidtopalovic/library_api/blob/main/media/logo/banner.png" />
</p>

# CLUBLIT! :books:


The place where readers come together to network and talk with their favorite authors and like-minded peers over voice. 
_#QuarantineandChill #StayHomeStaySafe #togetherandhome_

## Table of Contents
- [About](#about)
- [System Architecture](system-architecture)
- [Backend](#backend)
  - [Cloud App](#cloud-app)
  - [Running Locally](#running-locally)
    - [Local Node.js Installation](#local-node-installation)
    - [NVM](#nvm)
    - [Docker Container](#docker-container)
 - [Front-end](#front-end)
 - [Disclaimer](#disclaimer)


## About 

CLUBLIT! is a drop-in-audio social media for book lovers and a platform that unites all readers to discuss their favorite novels and engage with fellow readers and authors in a community.
We bring great minds together to discuss and share their reading experiences through co-reading, live readings, and online audio events. 
Our app assists you with the search for new potential reads and creates your customized wish lists. 

__Note:__ Not all features are available in the current release. This platform is developed in stages; the first and current version of the MVP (minimum viable product) demonstrates a backend developed in Node.js with CRUD operations for user accounts stored on a cloud-based MongoDB. Interaction with the external Google API REST service is used for querying book information allowing this information to be added to user's accounts. Concerning security mechanisms, the users' information follows salted and hash-based authentication. Furthermore, all our current cloud deployments have an RSA TLS (Azure) and SHA2 (Heroku) signed HTTPS certificate. Our ``https`` branch in this repository contains a self-signed HTTPS certificate for local deployments. 

## System Architecture
<p align="center">
  <img src="https://github.com/nahidtopalovic/library_api/blob/main/media/architecture/cloud-clublit.png" />
</p>

The front-end serves as a seamless user interface for IOS 15 and android (planned in a future release).
The backend is a REST-based service interface for CRUD operations (for example, data query of books, user sign up & login, POST, PUT) deployed via Elastic Beanstalk to AWS to facilitate scalable performance and Microsoft Azure as well as Heroku. The node server interacts with Google Books API. Furthermore, our system uses a NoSQL external Cloud database (MongoDB) to securely store our community user information (salted and hashed). 

## Backend
### Cloud App
Our current backend is accessible as a cloud application :rocket: on Azure and Heroku. Feel free to check them out here:


[![Clublit! in Azure](https://aka.ms/deploytoazurebutton)](https://clublit.azurewebsites.net/)
      [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://clublit.herokuapp.com/)


It is advisable to use [Postman](https://www.postman.com/) for CRUD operations when acccessing the backend.

### Running Locally
To run this repository on your local machine download the source code and extract its contents or clone the repository.
We provide you with a few options shipped with this repository. 
1. Starting a local server with node.js with **version 14.13.0**.  
2. Using ``` nvm```.
If you have node.js already installed but are not running node version 14.13.0, you may wish to switch between node.js versions using `` nvm `` (see ``nvm `` section for details).  
3. Using Docker.

#### Local Node Installation
[Node.js](https://nodejs.org/en/) is required. 

1. In your terminal navigate to the downloaded or cloned repository. 
```
cd library_api | bash
```

2. To install missing depdencies: 
```
npm install
```

3. To start the application:
```
npm start
```


#### NVM 
Switching between node versions to run this app locally on your machine. 

Installing nvm on mac:
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```
Adding the source lines from the snippet below to the correct profile file:

```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```
Installing node.js version 14.13
``` nvm install 14.13```

Selecting node.js 14.13
``` nvm use 14.13```
For more information, see: [nvm documentation)[https://github.com/nvm-sh/nvm]

#### Docker Container
1. Install (Docker)[https://docs.docker.com/get-docker/] and verify your installation with ``` docker -v ```
2. Launch the terminal in the library_api folder or direct to this directory.
3. Build the docker image (be sure to include the ". " at the end and to define your username ``` whoami```)
```
docker build -t <your username>/clublit . 
```

4. Run your container:
```
docker run -it -p 3000:3000 qmul/clublit 
```

This will map port 3000 to the host 3000 in our container. 


More info: [Dockerizing a Node.js web app](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/) 



## Front-end
<p align="left">
  <img src="https://github.com/nahidtopalovic/library_api/blob/main/media/IOS/front-end.png" height="450" />
</p>

The current version of the front-end can be found in the respective branch of this repository and ran locally. It was successfully tested on macOS Big Sur launched over the command line. The IOS simulator or Android emulator can be launched through the web interface of the local server. 

Note: [Node.js](https://nodejs.org/en/) is required.


_Disclaimer: This project is part of a cloud computing coursework taught by [Dr. Sukhpal Singh Gill](https://github.com/iamssgill) and [Ignacio De Castro Arribas](https://www.linkedin.com/in/ignacio-de-castro-arribas-44a48117) at the Queen Mary University of London Electrical Engineering & Computer Science Department to create a prototype of a cloud application._
