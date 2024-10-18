// pages/index.tsx
"use client";

import {useEffect, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';
import ExperienceCard from './components/ExperienceCard';

const projects = [
  {
    title: 'Workplace Stars',
    description: 'A platform connecting professionals for networking and job opportunities.',
    link: 'https://workplacestars.com',
  },
  {
    title: 'Smart Insight',
    description: 'An AI-driven analytics platform for businesses.',
    link: 'https://smartinsight.ai',
  },
  // Add more projects as needed
];

const experiences = [
  {
    position: 'Backend Engineer',
    company: 'AFEX, Abuja',
    duration: 'November 2023 - Present',
    achievements: [
      'Enhanced an existing production system to optimize performance and user experience.',
      'Facilitated workshops to identify user pain points and propose actionable solutions.',
      'Analyzed user feedback to bridge knowledge gaps in product functionalities.',
      'Wrote comprehensive tests for the project to improve application stability.',
      'Built high-quality reusable code, ensuring maintainability.',
      'Continuously learned new technologies while applying current best practices.',
      'Utilized Python (Django) and Node.js predominantly in projects.',
    ],
  },
  {
    position: 'Principal Fullstack Engineer',
    company: 'IHealth and Wellness Foundation, New York',
    duration: 'August 2023 - February 2024',
    achievements: [
      'Led the design and implementation of scalable server-side software, improving system efficiency.',
      'Pioneered the development of robust architectures to support high-traffic applications.',
      'Implemented agile methodologies to deliver new features rapidly while maintaining quality.',
      'Orchestrated the setup of CI/CD pipelines integrated with AWS and GCP.',
      'Delivered and maintained new features and functionalities for clients.',
    ],
  },
  {
    position: 'Backend Engineer',
    company: 'Startup (Serv), California',
    duration: 'July 2023 - August 2024',
    achievements: [
      'Provided assistance in constructing the backend of a freelance platform from the ground up.',
      'Took charge of developing the entire backend infrastructure and project architecture.',
    ],
  },
  {
    position: 'Backend Intern',
    company: 'CloudWare Technologies, Ibadan',
    duration: 'December 2021 - March 2022',
    achievements: [
      'Made significant contributions to multiple client websites by introducing new features and rectifying bugs.',
      'Employed technologies like PHP, Laravel, and MySQL to deliver robust and efficient solutions.',
      'Collaborated closely with both the development team and clients to ensure comprehensive project delivery.',
      'Maintained and enhanced client websites adhering to the highest industry standards.',
    ],
  },
  {
    position: 'Programming Instructor',
    company: 'IQ Academy, Ibadan',
    duration: 'February 2021 - August 2021',
    achievements: [
      'Delivered lessons to students aged 4 to 12 on programming and web development.',
      'Developed engaging teaching approaches tailored to introduce programming fundamentals.',
      'Guided students to grasp and implement basic website coding using HTML and CSS effectively.',
    ],
  },
  {
    position: 'Javascript Instructor',
    company: 'MTech Innovation Hub, Ibadan',
    duration: 'September 2020 - February 2023',
    achievements: [
      'Delivered comprehensive training to frontend and backend developers in JavaScript.',
      'Developed an engaging and dynamic teaching style to motivate students.',
      'Continuously sought to improve the learning experience through feedback and evaluations.',
    ],
  },
  {
    position: 'Freelance Software Engineer',
    company: 'Multiple Clients',
    duration: 'August 2020',
    achievements: [
      'Designed and developed scalable server-side software & microservices using web development technologies.',
      'Worked closely with clients, engineers, and designers to establish problem specifications and system designs.',
      'Set up CI/CD pipelines integrated with cloud systems (AWS & GCP) for efficient deployment.',
    ],
  },
];


const Home = () => {
  // const [darkMode, setDarkMode] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Effect to load the theme from local storage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('isDarkTheme') === 'true';
    setDarkMode(savedTheme);
  }, []);

  // Effect to save the theme to local storage on change
  useEffect(() => {
    localStorage.setItem('isDarkTheme', darkMode.toString());
  }, [darkMode]);

  return (
      <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="container mx-auto p-4">
          <section id="about" className="mb-8">
            <h2 className="text-2xl font-bold">About Me</h2>
            <p className="mt-2">
              I am a passionate software engineer with over 4 years of experience in developing robust web applications and driving user engagement. My expertise spans across backend development, architectural design, and agile methodologies. I thrive in collaborative environments and am dedicated to delivering innovative solutions that enhance user experience.
            </p>
          </section>

          <section id="projects" className="mb-8">
            <h2 className="text-2xl font-bold">Some Frontend Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {projects.map((project, index) => (
                  <ProjectCard key={index} {...project} darkMode={darkMode} />
              ))}
            </div>
          </section>

          <section id="experience" className="mb-8">
            <h2 className="text-2xl font-bold">Experience</h2>
            <div className="mt-4">
              {experiences.map((exp, index) => (
                  <ExperienceCard key={index} {...exp} darkMode={darkMode} />
              ))}
            </div>
          </section>

          <section id="contact" className="mb-8">
            <h2 className="text-2xl font-bold">Contact</h2>
            <p className="mt-2">Feel free to reach out to me via email: <a href="mailto:abdulbasitdamilola6@gmail.com" className="text-blue-600 hover:underline">abdulbasitdamilola6@gmail.com</a></p>
          </section>
        </main>
        <Footer />
      </div>
  );
};

export default Home;
