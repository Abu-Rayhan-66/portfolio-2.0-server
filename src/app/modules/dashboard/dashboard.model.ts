import mongoose from 'mongoose';
import { TBlogs, TProject, TSkills } from './dashboard.interface';


const SkillsSchema = new mongoose.Schema<TSkills>(
  {
    
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const SkillsModel = mongoose.model<TSkills>('Skill', SkillsSchema);




const ProjectSchema = new mongoose.Schema<TProject>(
  {
    
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    technologies: {
      type: String,
      required: true,
    },
    githubClient: {
      type: String,
      required: true,
    },
    githubServer: {
      type: String,
      required: true,
    },
    demo: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const ProjectModel = mongoose.model<TProject>('Project', ProjectSchema);


const BlogSchema = new mongoose.Schema<TBlogs>(
  {
    
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    blogContent: {
      type: String,
      required: true,
    }
    
  },
  {
    timestamps: true,
  },
);

const BlogModel = mongoose.model<TBlogs>('Blog', BlogSchema);



export const dashboardModel = {
  SkillsModel,
  ProjectModel,
  BlogModel

}