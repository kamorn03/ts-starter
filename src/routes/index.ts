import { Router } from "express";
import UserRoute from "./users";

class Routes {
    public router: Router;
    constructor() {
        this.router = Router();
        this.routes();
    }
    private routes() {
        this.router.use('/api/user', new UserRoute().router);
    }
}

export default Routes;