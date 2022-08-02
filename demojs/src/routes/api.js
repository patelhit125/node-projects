import { Router } from 'express'
import authenticateUser from '../common/middlewares/authenticate'
import usersRouter from '../users/users.route'
import authRouter from '../auth/auth.route'

const router = Router()

router.use('/auth', authRouter)
router.use('/users', authenticateUser, usersRouter)

export default router
