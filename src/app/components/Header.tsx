import Link from 'next/link';
import { Switch } from '@headlessui/react';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';

interface HeaderProps {
    darkMode: boolean;
    setDarkMode: (value: boolean) => void;
}

const Header = ({ darkMode, setDarkMode }: HeaderProps) => {
    return (
        <header
            className={`${
                darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'
            } p-4 transition-colors duration-300`}
        >
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Abdulbasit Damilola Alabi</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link href="/" className={darkMode ? 'hover:text-gray-300' : 'hover:text-gray-700'}>Home</Link></li>
                        <li><Link href="#about" className={darkMode ? 'hover:text-gray-300' : 'hover:text-gray-700'}>About</Link></li>
                        <li><Link href="#projects" className={darkMode ? 'hover:text-gray-300' : 'hover:text-gray-700'}>Projects</Link></li>
                        <li><Link href="#experience" className={darkMode ? 'hover:text-gray-300' : 'hover:text-gray-700'}>Experience</Link></li>
                        <li><Link href="#contact" className={darkMode ? 'hover:text-gray-300' : 'hover:text-gray-700'}>Contact</Link></li>
                    </ul>
                </nav>
                <div className="flex items-center space-x-4">
                    {/* Icon */}
                    <div className="flex items-center justify-center">
                        {darkMode ? (
                            <MoonIcon className="h-6 w-6 text-white" />
                        ) : (
                            <SunIcon className="h-6 w-6 text-yellow-500" />
                        )}
                    </div>
                    {/* Toggle Button */}
                    <Switch
                        checked={darkMode}
                        onChange={setDarkMode}
                        className={`${
                            darkMode ? 'bg-gray-600' : 'bg-gray-200'
                        } relative inline-flex items-center h-8 rounded-full w-16 transition-colors duration-200`}
                    >
                        <span className="sr-only">Toggle dark mode</span>
                        <span
                            className={`${
                                darkMode ? 'translate-x-8' : 'translate-x-1'
                            } inline-block w-6 h-6 transform bg-white rounded-full transition-transform duration-200`}
                        />
                    </Switch>
                </div>
            </div>
        </header>
    );
};

export default Header;
