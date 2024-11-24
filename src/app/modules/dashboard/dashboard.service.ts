import { TBlogs, TProject, TSkills } from "./dashboard.interface";
import { dashboardModel } from "./dashboard.model";


const addSkillIntoDb = async (payload:TSkills) => {
  const result = await dashboardModel.SkillsModel.create(payload);

  return result;
};

const getSkillFromDb = async () => {
  const result = await dashboardModel.SkillsModel.find();

  return result;
};

const addProjectIntoDb = async (payload:TProject) => {
  const result = await dashboardModel.ProjectModel.create(payload);

  return result;
};

const getProjectFromDb = async () => {
  const result = await dashboardModel.ProjectModel.find();

  return result;
};

const addBlogIntoDb = async (payload:TBlogs) => {
  const result = await dashboardModel.BlogModel.create(payload);

  return result;
};

const getBlogFromDb = async () => {
  const result = await dashboardModel.BlogModel.find();

  return result;
};

export const dashboardService = {
  addSkillIntoDb,
  getSkillFromDb,
  addProjectIntoDb,
  getProjectFromDb,
  addBlogIntoDb,
  getBlogFromDb
}