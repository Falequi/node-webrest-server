import { Router } from "express";
import { JugadoresRoutes } from "./jugadores/routes";




export class AppRoutes {
    static get routes(): Router{
        const router = Router();

        router.use('/api/jugadores', JugadoresRoutes.routes );
        
        return router;
    }
}