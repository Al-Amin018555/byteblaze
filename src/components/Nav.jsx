import { useEffect, useState } from "react";

const Nav = () => {
    const [theme,setTheme] = useState('light');

    //getting theme data form local storage and setting it to html tag attribute and re-render(by the dependency) every time while theme value is changed
    useEffect(()=>{
        localStorage.setItem('theme',theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme',localTheme);
    },[theme])

    //checking whether we had toggled or not
    const handleToggle = e => {
        if(e.target.checked){
            setTheme('dark')
        }
        else{
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
                <input onChange={handleToggle} type="checkbox" className="toggle theme-controller" />
            </div>

        </div>
    );
};

export default Nav;