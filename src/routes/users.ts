import { Router, Request, Response } from "express";


class UserRoute {
    public router: Router;
    constructor() {
        this.router = Router();
        this.routes();
    }
    private routes() {
        this.router.get('/', (req: Request, res: Response) => {
            res.send('api/user')
        });
    }
}

export default UserRoute;