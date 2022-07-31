import { urlencoded } from 'body-parser';
import express from 'express';
import { DB } from './configs/DB';
import helmet from 'helmet';
import morgan from 'morgan';
import env from './configs/env';
import { Relationship } from './models/relationship';
import { Routes } from './routes';
import { Cors } from './helper/Cors.helper';

export class App{
    protected app: express.Application;

    constructor() {
        this.app = express()
        
        Cors.enable(this.app)
        this.app.use(urlencoded({ extended: true })) // parse application/x-www-form-urlencoded

        this.app.use(helmet())
        this.app.use(morgan("tiny"))
        
        const routes = new Routes()
        this.app.use("/", routes.configure())

        this.app.listen(env.port, () => {
            console.log(`Listening to port ${env.port}`)
        })

        DB.sq()
        Relationship.define()
    }
}