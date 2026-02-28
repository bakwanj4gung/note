import { useCallback, useEffect, useState } from "react"
import Sun from "../assets/sun.svg?react";
import Moon from "../assets/moon.svg?react";

function ButtonMode() {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            return savedTheme === "dark";
        }
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    const toggleDarkMode = useCallback(() => {
        setIsDarkMode((prev) => {
            const newMode = !prev;
            const html = document.documentElement;
            if (newMode) {
                html.classList.add("dark");
                localStorage.setItem("theme", "dark");
            } else {
                html.classList.remove("dark");
                localStorage.setItem("theme", "light");
            }
            return newMode;
        });
    }, []);

    useEffect(() => {
        const html = document.documentElement;
        if (isDarkMode) {
            html.classList.add("dark");
        } else {
            html.classList.remove("dark");
        }
    }, [isDarkMode]);

   return (
    <button 
        className="
            group relative flex items-center gap-4 border-2 rounded-full transition-all p-2.5 cursor-pointer text-dark dark:text-yellow-300
            [&>svg]:size-6
            [&>div]:size-9
            md:[&>svg]:size-8
            md:[&>div]:size-11
        "
        onClick={toggleDarkMode}
    >
        <div className={`${isDarkMode ? 'translate-x-[110%]' : ''} transition-all absolute rounded-full left-1 border`} />
        <Sun className={isDarkMode ? '' : 'animate-spin'} />
        <Moon className={isDarkMode? '[&>circle]:animate-pulse [&>circle:nth-child(2)]:[animation-delay:300ms] [&>circle:last-child]:[animation-delay:600ms]' : ''} />
    </button>
  )
}

export default ButtonMode