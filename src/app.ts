import express, { Request, Response, NextFunction } from "express";
import { json, urlencoded } from "body-parser";
import cookieParser from "cookie-parser";
import cors from 'cors'
import morgan from "morgan";
import Routes from "./routes";


class App {
    public app: express.Application;
    constructor() {
        this.app = express();
        this.middleware();
        this.routes();
    }

    private middleware() {
        this.app.all(
            '*',
            function (
                req: express.Request,
                res: express.Response,
                next: express.NextFunction
            ) {

                res.header('Access-Control-Allow-Origin', '*');
                next();
            }


        )

        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(json());
        this.app.use(urlencoded({ extended: false }));
        this.app.use(cookieParser());

    }


    private routes() {
        this.app.use(new Routes().router);
        this.app.all('*', (req: Request, res: Response, next: NextFunction) => {
            res.status(404).json({
                status: '404',
                messess: 'Cant find page'
            })
        })

    }
}


export default new App().app;