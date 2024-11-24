import { Router } from 'express';
import dashboardRoute from '../modules/dashboard/dashboard.routes';


const router = Router();

const moduleRoutes = [
  {
    path: "/dashboard",
    route: dashboardRoute,
  },
  
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
