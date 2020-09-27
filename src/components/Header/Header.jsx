import React from 'react';
import s from'./Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://cdn.clipart.email/b4367ebba5ed26a80bfe0566603517d7_company-logo-transparent-png-clipart-free-download-ywd_450-450.png' alt=""/>

        <div className={s.loginBlock}>
            { props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'login'}>Login</NavLink> }
        </div>
    </header>
}

export default Header;