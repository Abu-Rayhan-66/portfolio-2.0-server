import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { dashboardService } from "./dashboard.service";


const addSkill = catchAsync(async (req, res ) => {

  const newSkills = await dashboardService.addSkillIntoDb(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Skill added successfully",
    data: newSkills,
  });
});

const getSkill = catchAsync(async (req, res ) => {

  const skills = await dashboardService.getSkillFromDb();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Skills retrieve successfully",
    data: skills,
  });
});


const addProject = catchAsync(async (req, res ) => {

  const newProject = await dashboardService.addSkillIntoDb(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Project added successfully",
    data: newProject,
  });
});


const getProject = catchAsync(async (req, res ) => {

  const project = await dashboardService.getProjectFromDb();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Project retrieve successfully",
    data: project,
  });
});

const addBlog = catchAsync(async (req, res ) => {

  const newBlog = await dashboardService.addBlogIntoDb(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Blog added successfully",
    data: newBlog,
  });
});


const getBlog = catchAsync(async (req, res ) => {

  const blog = await dashboardService.getBlogFromDb();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Blog retrieve successfully",
    data: blog,
  });
});

export const dashboardController = {
  addSkill,
  getSkill,
  addProject,
  getProject,
  addBlog,
  getBlog
}

