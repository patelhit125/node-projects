import { Router } from 'express'
import authRouter from '../auth/auth.route'
import authenticateUser from '../common/middlewares/authenticate'
import usersRouter from '../users/users.route'

const router = Router()

router.use('/auth', authRouter)
router.use('/users', authenticateUser, usersRouter)

export default router
