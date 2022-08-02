import UsersService from './users.service'
import { HTTP_UNAUTHORIZE } from '../../constants'
import UserModel from '../models/user.model'

class UsersController {

  static async forgotPassword(req, res) {
    await UsersService.fogotPassword(req.body)
    return res.send({
        message: 'Password has been changed successfully',
    })
  }

  // static async updateProfile(req, res, next) {
    // passport.authenticate('local', async (err, user, message) => {
    //   if (err) return next(err)

    //   if (!user) {
    //     return res.status(HTTP_UNAUTHORIZE).json({
    //       message,
    //     })
    //   }

    //   const [userId] = await knex('users').insert({
    //     email: req.body.email,
    //     password: await hash(req.body.password, 10)
    //   })

    //   // const user = await knex('users').where('id', userId).first()

    //   const authentication = await AuthService.generateTokenPairs(
    //     user.id,
    //     user.email
    //   )

    //   return res.json({
    //     data: {
    //       ...new UserModel(user),
    //       authentication,
    //     },
    //   })
    // })(req, res, next)
  // }

  static async getProfile(req, res) {
    
    const { user } = req

    if (!user) {
      return res.status(HTTP_UNAUTHORIZE).json({
        message: 'Unauthorised user'
      })
    }
    
    return res.json({
      data: {
        ...new UserModel(user)
      }
    })
  }
}

export default UsersController
