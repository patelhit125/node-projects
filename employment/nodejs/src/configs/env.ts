import * as dotenv from 'dotenv'
import { IsNotEmpty } from 'class-validator'

dotenv.config({ path: '../.env' })

class Env {

  @IsNotEmpty()
  public corsDomains: string

}

const env = new Env()
env.corsDomains = process.env.CORS_DOMAIN

export default env