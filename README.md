# CryptoPriceTracker
![image](https://github.com/devilGhostman/CryptoPriceTracker/assets/82955240/48cb02bc-204a-41f2-8b6d-0008fbb97356)

## Getting started
### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
https://github.com/devilGhostman/CryptoPriceTracker.git
```

### Install packages

```shell
cd CryptoPriceTracker/
npm install
```

### Start the app

```shell
npm start
```

### Building the Docker Image
- From the root of the repository run the command:
```shell
docker build -t crypto:latest .
```

### Building the Docker container
```shell
docker run --name crypto-app -d --rm -it -p 3000:3000 crypto:latest
```
- Now browse to `localhost:3000` to get to the page. 
- To stop the container
```shell
docker stop crypto-app
```
