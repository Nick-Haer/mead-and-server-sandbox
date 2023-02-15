import meadRoutes from "./meadRoutes";
import { Router } from 'express'
const router = Router()

router.use('/api/mead', meadRoutes)

export default router;


