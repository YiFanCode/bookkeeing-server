'use strict';

const Service = require('egg').Service;
class HomeService extends Service {
  async user() {
    // 从数据库获取信息
    const { ctx, app } = this
    const QUERY_STR = 'id, name'
    let sql = `select ${QUERY_STR} from list`
    try {
      const result = await app.mysql.query(sql)
      return result
    } catch (err) {
      console.log(err)
      return err
    }
  }

  async addUser(name) {
    const { ctx, app } = this
    try {
      const result = await app.mysql.insert('list', {name})
      return result
    } catch (error) {
      console.log(error)
      return error
    }
  }

  async editUser(id, name) {
    const { ctx, app } = this
    try {
      const result = await app.mysql.update('list', {name}, {
        where: {
          id
        }
      })
      return result
    } catch (error) {
      console.log(error)
      return error
    }
  }

  async deleteUser(id) {
    const { ctx, app } = this
    try {
      const result = await app.mysql.delete('list', {id})
      return result
    } catch (error) {
      console.log(error)
      return error
    }
  }
}

module.exports = HomeService