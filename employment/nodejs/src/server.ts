import express from 'express';
import { Cors } from './helper/cors.helper';
import { urlencoded } from 'body-parser';
import morgan from 'morgan'
import helmet from 'helmet';

export class App {
  protected app: express.Application;

  constructor() {

    this.app = express()

    Cors.enable(this.app)
    this.app.use(urlencoded({extends: true})) // parse application/x-www-form-urlencoded

    this.app.use(helmet())
    this.app.use(morgan('tiny'))

    
  }
}