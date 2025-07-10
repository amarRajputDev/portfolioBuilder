import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  bio: string;
  profileImage?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  achievements: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
  imageUrl?: string;
  featured: boolean;
}

export interface Skill {
  id: string;
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'Design' | 'Other';
}

export interface SocialLink {
  id: string;
  platform: 'LinkedIn' | 'GitHub' | 'Twitter' | 'Instagram' | 'Facebook' | 'YouTube' | 'Website' | 'Other';
  url: string;
  username: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  education: Education[];
  experience: Experience[];
  projects: Project[];
  skills: Skill[];
  socialLinks: SocialLink[];
  selectedTemplate: 'modern' | 'minimal' | 'creative';
}

interface PortfolioStore {
  portfolioData: PortfolioData;
  currentStep: number;
  
  // Actions
  updatePersonalInfo: (info: Partial<PersonalInfo>) => void;
  addEducation: (education: Education) => void;
  updateEducation: (id: string, education: Partial<Education>) => void;
  removeEducation: (id: string) => void;
  addExperience: (experience: Experience) => void;
  updateExperience: (id: string, experience: Partial<Experience>) => void;
  removeExperience: (id: string) => void;
  addProject: (project: Project) => void;
  updateProject: (id: string, project: Partial<Project>) => void;
  removeProject: (id: string) => void;
  addSkill: (skill: Skill) => void;
  updateSkill: (id: string, skill: Partial<Skill>) => void;
  removeSkill: (id: string) => void;
  addSocialLink: (link: SocialLink) => void;
  updateSocialLink: (id: string, link: Partial<SocialLink>) => void;
  removeSocialLink: (id: string) => void;
  setSelectedTemplate: (template: 'modern' | 'minimal' | 'creative') => void;
  setCurrentStep: (step: number) => void;
  resetPortfolio: () => void;
}

const initialPortfolioData: PortfolioData = {
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    website: '',
    bio: '',
  },
  education: [],
  experience: [],
  projects: [],
  skills: [],
  socialLinks: [],
  selectedTemplate: 'modern',
};

export const usePortfolioStore = create<PortfolioStore>()(
  persist(
    (set, get) => ({
      portfolioData: initialPortfolioData,
      currentStep: 0,

      updatePersonalInfo: (info) =>
        set((state) => ({
          portfolioData: {
            ...state.portfolioData,
            personalInfo: { ...state.portfolioData.personalInfo, ...info },
          },
        })),

      addEducation: (education) =>
        set((state) => ({
          portfolioData: {
            ...state.portfolioData,
            education: [...state.portfolioData.education, education],
          },
        })),

      updateEducation: (id, updates) =>
        set((state) => ({
          portfolioData: {
            ...state.portfolioData,
            education: state.portfolioData.education.map((edu) =>
              edu.id === id ? { ...edu, ...updates } : edu
            ),
          },
        })),

      removeEducation: (id) =>
        set((state) => ({
          portfolioData: {
            ...state.portfolioData,
            education: state.portfolioData.education.filter((edu) => edu.id !== id),
          },
        })),

      addExperience: (experience) =>
        set((state) => ({
          portfolioData: {
            ...state.portfolioData,
            experience: [...state.portfolioData.experience, experience],
          },
        })),

      updateExperience: (id, updates) =>
        set((state) => ({
          portfolioData: {
            ...state.portfolioData,
            experience: state.portfolioData.experience.map((exp) =>
              exp.id === id ? { ...exp, ...updates } : exp
            ),
          },
        })),

      removeExperience: (id) =>
        set((state) => ({
          portfolioData: {
            ...state.portfolioData,
            experience: state.portfolioData.experience.filter((exp) => exp.id !== id),
          },
        })),

      addProject: (project) =>
        set((state) => ({
          portfolioData: {
            ...state.portfolioData,
            projects: [...state.portfolioData.projects, project],
          },
        })),

      updateProject: (id, updates) =>
        set((state) => ({
          portfolioData: {
            ...state.portfolioData,
            projects: state.portfolioData.projects.map((proj) =>
              proj.id === id ? { ...proj, ...updates } : proj
            ),
          },
        })),

      removeProject: (id) =>
        set((state) => ({
          portfolioData: {
            ...state.portfolioData,
            projects: state.portfolioData.projects.filter((proj) => proj.id !== id),
          },
        })),

      addSkill: (skill) =>
        set((state) => ({
          portfolioData: {
            ...state.portfolioData,
            skills: [...state.portfolioData.skills, skill],
          },
        })),

      updateSkill: (id, updates) =>
        set((state) => ({
          portfolioData: {
            ...state.portfolioData,
            skills: state.portfolioData.skills.map((skill) =>
              skill.id === id ? { ...skill, ...updates } : skill
            ),
          },
        })),

      removeSkill: (id) =>
        set((state) => ({
          portfolioData: {
            ...state.portfolioData,
            skills: state.portfolioData.skills.filter((skill) => skill.id !== id),
          },
        })),

      addSocialLink: (link) =>
        set((state) => ({
          portfolioData: {
            ...state.portfolioData,
            socialLinks: [...state.portfolioData.socialLinks, link],
          },
        })),

      updateSocialLink: (id, updates) =>
        set((state) => ({
          portfolioData: {
            ...state.portfolioData,
            socialLinks: state.portfolioData.socialLinks.map((link) =>
              link.id === id ? { ...link, ...updates } : link
            ),
          },
        })),

      removeSocialLink: (id) =>
        set((state) => ({
          portfolioData: {
            ...state.portfolioData,
            socialLinks: state.portfolioData.socialLinks.filter((link) => link.id !== id),
          },
        })),

      setSelectedTemplate: (template) =>
        set((state) => ({
          portfolioData: {
            ...state.portfolioData,
            selectedTemplate: template,
          },
        })),

      setCurrentStep: (step) => set({ currentStep: step }),

      resetPortfolio: () =>
        set({
          portfolioData: initialPortfolioData,
          currentStep: 0,
        }),
    }),
    {
      name: 'portfolio-storage',
    }
  )
);