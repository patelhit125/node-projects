import { Router } from 'express'
import { employeeRoute } from './module/employee/employee.route'

export class Routes {

  public configure() {

    const router = Router()
    router.use("/", employeeRoute)
  }
}