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
                        <p>SERC moderator will check quality and decide whether to accept</p>
                        <Link to="/moderation" className="btn menu-btn">Moderation</Link>
                        <p>SERC analyst will analyze the uploaded article and decide if it can be passed to the database</p>
                        <Link to="/analyst" className="btn menu-btn">Analysis article</Link>
                        <p>You can go back to option</p>
                        <Link to="/" className="btn menu-btn">Back to option</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainMenu;
