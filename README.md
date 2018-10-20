# Nanoleaf Node Starter  
Super simple starter project for a Node.js + ejs HTML front-end to change [Nanoleaf](https://nanoleaf.me/en/) lights.

## Setup
### Installation
1. Make sure you have [Node.js](https://nodejs.org/en/) installed.
2. Clone the repository and run `npm install` to get needed dependencies.

### Configuration
This project uses a `.env` file at the root of the repository to handle most of the configuration. Create one with the following:
```
NANOLEAF_IP='your Nanoleafs ip address'
NANOLEAF_PORT='your Nanoleafs port'
NANOLEAF_TOKEN='api token for your nanoleaf'
```
You can learn more about these values from the [nanoleaf-aurora-api](https://github.com/darrent/nanoleaf-aurora-api) package that is used to communicate with the lights.

### Running
After installation and configuration, you can simply run: `npm start` and your application will be live at `localhost:3000`.