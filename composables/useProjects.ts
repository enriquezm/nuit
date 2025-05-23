export interface Project {
  url: string;
  title: string;
  details: string;
}

const projects: Project[] = [
  {
    url: '/ask',
    title: 'Finn Bot',
    details: 'My personal bot',
  },
];

export const useProjects = () => {
  return {
    projects,
  }
}