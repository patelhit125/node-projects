
import { hash } from 'bcrypt'
import knex from '../common/config/database.config'
import NotFoundException from '../common/exceptions/not-found.exception'
import ConflictHttpException from '../common/exceptions/conflict-request.exception'

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

  async update(_id, newPassword) {
    return knex('users').where({ id: _id }).update({ password: newPassword })
  }

  /**
   * Check user exists in path
   */
  async checkPathUserExists(req, _res, next) {
    const user = await knex('users').where({ id: req.params.user }).first()
    if (!user) throw new NotFoundException('Route not found')
    next()
  }

  async forgotPassword(data) {
    const user = await knex('users').where('email', data.email).first()
    if (data.email.compare(user.email)) {
      const newHashPassword = await hash(data.newPassword, 10)
      await knex('users')
        .where('id', user.id)
        .update({ password: newHashPassword })

      return true
    }
    throw new ConflictHttpException('Current password does not match.')
  }
}

export default new UsersService()
