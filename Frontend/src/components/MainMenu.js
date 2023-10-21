import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../MainMenu.css';

class MainMenu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="MainMenu">
                <div className="container">
                    <div className="header">
                        <h1>Main Menu for Administrator</h1>
                        <Link to="/moderation" className="btn menu-btn">Moderation</Link>
                        <Link to="/analyst" className="btn menu-btn">Analysis article</Link>
                        <Link to="/" className="btn menu-btn">Back to option</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainMenu;
