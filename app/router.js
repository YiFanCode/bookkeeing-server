'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;
  // 鉴权中间件
  const _jwt = middleware.jwtErr(app.config.jwt.secret)
  // 注册
  router.post('/api/user/register', controller.user.register);
  // 登录
  router.post('/api/user/login', controller.user.login);


  // 获取用户信息
  router.get('/api/user/get_userinfo', _jwt, controller.user.getUserInfo);
  // 修改用户信息(修改用户个性签名)
  router.post('/api/user/edit_userinfo', _jwt, controller.user.editUserInfo);
  // 修改用户密码
  router.post('/api/user/modify_pass', _jwt, controller.user.modifyPass); 

  // 添加账单
  router.post('/api/bill/add', _jwt, controller.bill.add);
  // 获取账单列表
  router.get('/api/bill/list', _jwt, controller.bill.list);
  // 获取账单详情
  router.get('/api/bill/detail', _jwt, controller.bill.detail);
  // 更新账单
  router.post('/api/bill/update', _jwt, controller.bill.update);
  // 删除账单
  router.post('/api/bill/delete', _jwt, controller.bill.delete);

  // 全部账单展示数据
  router.get('/api/bill/data', _jwt, controller.bill.data);

  // 获取消费类型列表
  router.get('/api/type/list', _jwt, controller.type.list); 

  router.get('/api/note/list', _jwt, controller.note.list); // 获取笔记列表
  router.post('/api/note/add', _jwt, controller.note.add); // 新增笔记
  router.post('/api/note/delete', _jwt, controller.note.delete); // 删除笔记
  router.post('/api/note/update', _jwt, controller.note.update); // 修改笔记

  // 上传图片
  router.post('/api/upload', _jwt, controller.upload.upload);
};
