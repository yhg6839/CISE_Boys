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
                    <p>Push articles to SPEED:</p>
                    <Link to="/submit-article" className="btn-option">
                        Submit Article
                    </Link>
                    
                    <p>Search articles you pushed:</p>
                    <Link to="/search-article" className="btn-option">
                        Search for Article
                    </Link>

                    <p>View approved articles by the moderator:</p>
                    <Link to="/approved" className="btn-option">
                        Approved Articles
                    </Link>

                    <p>Return to options:</p>
                    <Link to="/" className="btn-option">
                        Back to Options
                    </Link>
                </main>
            </div>
        );
    }
}

export default MainMenuUser;
