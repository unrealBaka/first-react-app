import React from "react";
import Logo from "../../static/media/logo.png"
import nav from "./Navbar.module.css";
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={nav.nav}>

            <div className={nav.logo}>
                <img src={Logo} alt='Logo'/>
            </div>

            <ul>
                <NavLink className={nav.item} activeClassName={nav.activeLink} to='/profile'>
                    <div className={nav.icon}>
                        <svg width="20" height="20" viewBox="0 0 20 20">
                            <path
                                d="M10 0a4 4 0 00-4 4v1.6a4 4 0 108 0V4a4 4 0 00-4-4zM7 10.4a5 5 0 00-5 5v3h16v-3a5 5 0 00-5-5H7z"></path>
                        </svg>
                    </div>
                    <div className={nav.linkTitle}><span>Profile</span></div>
                </NavLink>
                <NavLink className={nav.item} activeClassName={nav.activeLink} to='/dialogs'>
                    <div className={nav.icon}>
                        <svg width="20" height="20" viewBox="0 0 20 20">
                            <path
                                d="M15.5 3h-12c-.825 0-1.493.675-1.493 1.5L2 18l3-3h10.5c.825 0 1.5-.675 1.5-1.5v-9c0-.825-.675-1.5-1.5-1.5zm-5.25 9h-1.5v-1.5h1.5V12zm0-3h-1.5V6h1.5v3z"></path>
                        </svg>
                    </div>
                    <div className={nav.linkTitle}><span> Messages </span></div>
                </NavLink>
                <NavLink className={nav.item} activeClassName={nav.activeLink} to='/news'>
                    <div className={nav.icon}>
                        <svg width="20" height="20" viewBox="0 0 20 20">
                            <path
                                d="M8 17.063c.963 0 1.75-.788 1.75-1.75h-3.5c0 .962.779 1.75 1.75 1.75zm5.25-5.25V7.436c0-2.686-1.435-4.935-3.938-5.53v-.595A1.31 1.31 0 008 0a1.31 1.31 0 00-1.313 1.313v.595c-2.51.595-3.937 2.835-3.937 5.53v4.375L1 13.563v.874h14v-.874l-1.75-1.75z"></path>
                        </svg>
                    </div>
                    <div className={nav.linkTitle}><span> News </span></div>
                </NavLink>
                <NavLink className={nav.item} activeClassName={nav.activeLink} to='/music'>
                    <div className={nav.icon}>
                        <svg width="20" height="20" viewBox="0 0 30 30">
                            <path
                                d="M21.055,3.018l-6.474,1.386C13.659,4.601,13,5.416,13,6.359v11.354c0,1.949-6,0.32-6,5.766c0,1,0.602,3.52,3.466,3.52 C13.986,27,15,24.324,15,21.354c0-1.271,0-11.816,0-11.816l6.08-1.334C21.617,8.086,22,7.61,22,7.059V3.782 C22,3.284,21.541,2.913,21.055,3.018z"></path>
                        </svg>
                    </div>
                    <div className={nav.linkTitle}><span>Music</span></div>
                </NavLink>
                <hr className={nav.line}/>
                <NavLink className={nav.item} activeClassName={nav.activeLink} to='/settings'>
                    <div className={nav.icon}>
                        <svg width="16" height="16" viewBox="0 0 16 16">
                            <path
                                d="M15.2311 9.86557L13.8999 9.09682C14.0343 8.37182 14.0343 7.62807 13.8999 6.90307L15.2311 6.13432C15.3843 6.04682 15.453 5.86557 15.403 5.69682C15.0561 4.58432 14.4655 3.57807 13.6936 2.74057C13.5749 2.61244 13.3811 2.58119 13.2311 2.66869L11.8999 3.43744C11.3405 2.95619 10.6968 2.58432 9.99989 2.34057V0.806195C9.99989 0.631195 9.87802 0.47807 9.70614 0.44057C8.55927 0.18432 7.38427 0.19682 6.29365 0.44057C6.12177 0.47807 5.9999 0.631195 5.9999 0.806195V2.34369C5.30615 2.59057 4.6624 2.96244 4.0999 3.44057L2.77177 2.67182C2.61865 2.58432 2.42802 2.61244 2.30927 2.74369C1.5374 3.57807 0.946773 4.58432 0.599898 5.69994C0.546773 5.86869 0.618648 6.04994 0.771773 6.13744L2.10302 6.90619C1.96865 7.63119 1.96865 8.37494 2.10302 9.09995L0.771773 9.86869C0.618648 9.95619 0.549898 10.1374 0.599898 10.3062C0.946773 11.4187 1.5374 12.4249 2.30927 13.2624C2.42802 13.3906 2.62177 13.4218 2.77177 13.3343L4.10302 12.5656C4.6624 13.0468 5.30615 13.4187 6.00302 13.6624V15.1999C6.00302 15.3749 6.1249 15.5281 6.29677 15.5656C7.44365 15.8218 8.61864 15.8093 9.70927 15.5656C9.88114 15.5281 10.003 15.3749 10.003 15.1999V13.6624C10.6968 13.4156 11.3405 13.0437 11.903 12.5656L13.2343 13.3343C13.3874 13.4218 13.578 13.3937 13.6968 13.2624C14.4686 12.4281 15.0593 11.4218 15.4061 10.3062C15.453 10.1343 15.3843 9.95307 15.2311 9.86557ZM7.99989 10.4999C6.62177 10.4999 5.4999 9.37807 5.4999 7.99994C5.4999 6.62182 6.62177 5.49994 7.99989 5.49994C9.37802 5.49994 10.4999 6.62182 10.4999 7.99994C10.4999 9.37807 9.37802 10.4999 7.99989 10.4999Z"></path>
                        </svg>
                    </div>
                    <div className={nav.linkTitle}><span>Settings</span></div>
                </NavLink>
            </ul>

        </nav>
    );
}

export default Navbar;