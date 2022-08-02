import { Router } from 'express'
import asyncWrap from 'express-async-wrapper'
import UsersController from './users.controller'

const router = Router()

router.post('/forgot-password', asyncWrap(UsersController.forgotPassword))
router.post('/update-profile', asyncWrap(UsersController.updateProfile))
router.get('/get-profile', asyncWrap(UsersController.getProfile))

export default router
