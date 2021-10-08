/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1631756620185_1505';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    uploadDir: 'app/public/upload'
  };


  // 安全威胁 csrf 的防范 网络请求的安防策略
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    domainWhiteList: ['*'] // 配置白名单
  }
  // 跨域配置
  config.cors = {
    origin: '*', // 允许所有跨域访问
    credentials: true, // 允许 Cookie 跨域跨域
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  }
  // egg-view-ejs 渲染html模板
  config.view = {
    mapping: {'.html': 'ejs'} // 左边写成.html后缀，会自动渲染.html文件
  }
  // 数据库配置
  exports.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '123456', // 初始化密码，没设置的可以不写
      // 数据库名
      database: 'juejue-cost', // 我们新建的数据库名称
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  }
  // jsonwebtoken秘钥
  config.jwt = {
    secret: 'TallyBook'
  }
  // egg 提供两种文件接收模式，1 是 file 直接读取，2 是 stream 流的方式。
  config.multipart = {
    mode: 'file'
  }

  return {
    ...config,
    ...userConfig,
  };
};