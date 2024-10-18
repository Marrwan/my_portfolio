"use client";
import dynamic from 'next/dynamic';

const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), {
    ssr: false,
});

interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
    darkMode: boolean;
}

const ProjectCard = ({ title, description, link, darkMode }: ProjectCardProps) => {
    return (
        <MotionDiv
            className={`${
                darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-900 border-gray-200'
            } border shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>{description}</p>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                } hover:underline`}
            >
                View Project
            </a>
        </MotionDiv>
    );
};

export default ProjectCard;
