import knex from '../common/config/database.config'
import NotFoundException from '../common/exceptions/not-found.exception'

class UsersService {
  /**
   * Find one
   * @param {integer} id
   */
  async findOne(id) {
    return knex('users').where({ id }).first()
  }

  /**
   * Find by email
   * @param {string} email
   */
  async findByEmail(email) {
    return knex('users').where({ email })
  }

  /**
   * Get all users
   */
  async findAll() {
    return knex('users')
  }

  /**
   * Check user exists in path
   */
  async checkPathUserExists(req, _res, next) {
    const user = await knex('users').where({ id: req.params.user }).first()
    if (!user) throw new NotFoundException('Route not found')
    next()
  }
}

export default new UsersService()
