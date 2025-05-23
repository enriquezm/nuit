export interface Experience {
  url: string;
  title: string;
  duration: string;
  company: string;
}

const experiences = [
  {
    url: 'https://slickdeals.net',
    title: 'Sr Fullstack Engineer',
    company: 'Slickdeals',
    duration: '2019 - Present',
  },
  {
    url: 'https://www.unlv.edu/integrated-marketing-branding/web',
    title: "Web Specialist",
    company: 'UNLV',
    duration: '2017 - 2019',
  }
];

export const useExperiences = () => {
  return {
    experiences,
  }
}