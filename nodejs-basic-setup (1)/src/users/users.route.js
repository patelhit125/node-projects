import { Router } from 'express'
import asyncWrap from 'express-async-wrapper'
import UsersController from './users.controller'

const router = Router()

router.post('/', asyncWrap(UsersController.findAll))

export default router
