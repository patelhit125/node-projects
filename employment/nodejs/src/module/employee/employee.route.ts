import { Router } from 'express'
import { EmployeeController } from './employee.controller'

const router = new Router()
const employeeContoller = new EmployeeController()

router.post('/register', v.validate(EmployeeRegisterDto), employeeContoller.register)

export const employeeRoutes: Router = router
