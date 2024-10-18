interface ExperienceCardProps {
    position: string;
    company: string;
    duration: string;
    achievements: string[];
    darkMode: boolean;
}

const ExperienceCard = ({ position, company, duration, achievements, darkMode }: ExperienceCardProps) => {
    return (
        <div
            className={`${
                darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-900 border-gray-200'
            } border shadow-md rounded-lg p-6 mb-6 transition-shadow duration-300 hover:shadow-lg`}
        >
            <h3 className="text-lg font-semibold">{position}</h3>
            <h4 className={`${darkMode ? 'text-gray-400' : 'text-gray-700'} text-md font-medium`}>{company}</h4>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{duration}</p>
            <ul className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} list-disc ml-5 mt-3 space-y-2`}>
                {achievements.map((ach, index) => (
                    <li key={index}>{ach}</li>
                ))}
            </ul>
        </div>
    );
};

export default ExperienceCard;
