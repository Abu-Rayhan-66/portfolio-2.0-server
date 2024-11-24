import express from "express";
import { dashboardController } from "./dashboard.controller";


const dashboardRoute = express.Router();

dashboardRoute.post('/add-skill', dashboardController.addSkill);
dashboardRoute.get('/get-skill', dashboardController.getSkill);
dashboardRoute.post('/add-project', dashboardController.addProject);
dashboardRoute.get('/get-project', dashboardController.getProject);
dashboardRoute.post('/add-blog', dashboardController.addBlog);
dashboardRoute.get('/get-blog', dashboardController.getBlog);

export default dashboardRoute