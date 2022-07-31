import express from 'express';
import { Cors } from './helper/cors.helper';

export class App {
  protected app: express.Application;

  constructor() {

    this.app = express()

    Cors.enable(this.app)
    
  }
}