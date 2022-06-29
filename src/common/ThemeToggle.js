import React, { useContext } from 'react';
import {FiSun,FiMoon} from "react-icons/fi";
import {ThemeContext} from "../component/Context/ThemeContext"

const Toggle = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div className="transition duration-500 ease-in-out rounded-full p-2">
            {theme === 'dark' ? (
                <FiSun
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="text-slate-600 dark:text-gray-200 text-xl cursor-pointer"
                />
            ) : (
                    <FiMoon
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="text-slate-600 dark:text-gray-200 text-xl cursor-pointer"
                    />
                )}
        </div>
    );
};

export default Toggle;