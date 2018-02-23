const _ = require("lodash");

const config = {
  dev: "development",
  test: "testing",
  prod: "production",
  port: process.env.PORT || 5000,
  expireTime: 24 * 60 * 365,
  secrets: {
    jwt: process.env.JWT || "gumball"
  }
};

process.env.NODE_ENV = process.env.NODE_ENV || config.dev;
config.env = process.env.NODE_ENV;

let envConfig;
try {
  envConfig = require(`./${config.env}`);
  envConfig = envConfig || {};
} catch (e) {
  envConfig = {};
}

module.exports = _.merge(config, envConfig);
