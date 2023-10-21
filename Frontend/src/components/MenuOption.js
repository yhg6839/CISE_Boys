import React from 'react';
import { Link } from 'react-router-dom';
import '../MenuOption.css';

const MenuOption = () => {
    return (
        <div className="menu-wrapper">
            <header className="menu-header">
                <h1>Choose Your Role</h1>
            </header>
            <div className="menu-content">
                <p>Select your preferred role to proceed:</p>
                <div className="role-selection">
                    <Link to="/main-menu-user" className="role-button user">
                        User
                    </Link>
                    <Link to="/mainmenu" className="role-button admin">
                        Administrator
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MenuOption;
