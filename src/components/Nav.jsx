import { useEffect, useState } from "react";

const Nav = () => {
    const [theme, setTheme] = useState('light');

    //getting theme data form local storage and setting it to html tag attribute and re-render(by the dependency) every time while theme value is changed
    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme);
    }, [theme])

    //checking whether we had toggled or not
    const handleToggle = e => {
        if (e.target.checked) {
            setTheme('dark')
        }
        else {
            setTheme('light')
        }
    }
    return (
        <div className="navbar bg-base-100 shadow-lg px-4 fixed z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li><a>Blogs</a></li>
                        <li><a>Bookmarks</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost gap-0 text-secondary normal-case text-2xl">Byte<span className="text-primary">Blaze</span></a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className="font-bold"><a>Home</a></li>
                    <li className="font-bold"><a>Blogs</a></li>
                    <li className="font-bold"><a>Bookmarks</a></li>
                </ul>
                {/* <input onChange={handleToggle} type="checkbox" className="toggle theme-controller" /> */}
                
                <label className="toggle text-base-content">
                    <input type="checkbox" onChange={handleToggle} className="theme-controller" />

                    <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

                    <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

                </label>
            </div>

        </div>
    );
};

export default Nav;