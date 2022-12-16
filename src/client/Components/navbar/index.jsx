import React from 'react'
import './Navbar.css'
import { Navbar } from './Navbar';
import { LoggedNavbar } from './loggedNavbar';
export const IndexNavbar = () => {

    let user = sessionStorage.getItem('userData');
    if (user) {
        let logged = JSON.parse(user).logged;
        if (logged) {
            return <LoggedNavbar />;
        }
    }
    return <Navbar />;
}
