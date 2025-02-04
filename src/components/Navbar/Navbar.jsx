import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
//let classesNew = `${s.item} ${s.active}`
//console.log(s);

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
        </div>
        <div className={s.item}>
            <a href="/">News</a>
        </div>
        <div className={s.item}>
            <a href="/">Music</a>
        </div>
        <div className={s.item}>
            <a href="/">Settings</a>
        </div>
    </nav>
}

export default Navbar;