'use strict';

const Service = require('egg').Service;
const crypto = require('crypto')

class UserService extends Service {
  // 通过用户名查询数据库是否存在该用户
  async getUserByName(username) {
    const { app } = this
    try {
      const result = await app.mysql.get('user', {username})
      return result
    } catch (error) {
      console.log(error)
      return null
    }
  }
  // 注册
  async register(params) {
    const { app } = this
    try {
      // 向user表中写入数据
      const result = await app.mysql.insert('user', params)
      return result
    } catch (error) {
      console.log(error)
      return null
    }
  }
  // 修改用户信息
  async editUserInfo(params) {
    const { app } = this
    try {
      // 通过 app.mysql.update 方法，指定 user 表，
      const result = await app.mysql.update('user', {
        ...params // 要修改的参数体，直接通过 ... 扩展操作符展开
      }, {
        where: {
          id: params.id // 筛选出 id 等于 params.id 的用户
        }
      })
      return result
    } catch (error) {
      console.log(error)
      return null
    }
  }

  // 修改密码
  async modifyPass(params) {
    const { ctx, app } = this
    try {
      let reslut = await app.mysql.update('user',{
        ...params
      },{
        id: params.id
      })
      return reslut
    } catch (error) {
      console.log(error);
      return null;
    }
  }


  // 专门对数据进行md5加密的方法，输入明文返回密文
  getMd5Data(data) {
    return crypto.createHash('md5').update(data).digest('hex');
  }
}

module.exports = UserService