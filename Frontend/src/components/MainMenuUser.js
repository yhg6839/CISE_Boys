import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../MainMenuUser.css';

class MainMenuUser extends Component {
    render() {
        return (
            <div className="menu-container">
                <header className="menu-header">
                    <h1>Main Menu for User</h1>
                </header>
                <main className="menu-content">
                    <Link to="/submit-article" className="btn-option">
                        Submit Article
                    </Link>
                    
                    <Link to="/search-article" className="btn-option">
                        Search for Article
                    </Link>

                    <Link to="/approved" className="btn-option">
                        Approved Articles
                    </Link>

                    <Link to="/" className="btn-option">
                        Back to Options
                    </Link>
                </main>
            </div>
        );
    }
}

export default MainMenuUser;
