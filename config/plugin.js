'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  ejs: {
    enable: true,
    package: 'egg-view-ejs'
  },
  mysql: {
    enable: true,
    package: 'egg-mysql'
  },
  // jsonwebtoken
  jwt: {
    enable: true,
    package: 'egg-jwt'
  },
  // 跨域
  cors: {
    enable: true,
    package: 'egg-cors'
  }
};
