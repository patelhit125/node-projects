import UserResource from './user.resource'
import UsersService from './users.service'

class UsersController {
  /**
   * Get all users
   * @param {*} req
   * @param {*} res
   */
  static async findAll(req, res) {
    const users = await UsersService.findAll(req.user.id, req.body, req.files)

    res.json({
      data: new UserResource(users),
    })
  }
}

export default UsersController
