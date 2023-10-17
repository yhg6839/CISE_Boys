import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainMenuUser extends Component{
    constructor(props)
    {
        super(props);
    }

    render() {
        return (
          <div className="MainMenuUser">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <br/>
                  <h1 className="display-4 text-center">Main Menu for User</h1>
                  <br/>
                </div>
              </div>
              <br/>
              <div className="col-md-8 m-auto">
                <br/>
                <p className="lead text-center">
                 You can push articles to SPEED
              </p>
                <div className="col-md-10 m-auto">
              <Link to="/submit-article" className="btn btn-outline-warning btn-block mt-4">
                    Submit Article
                </Link>
            </div>
            
            <p className="lead text-center">
                 You can search articles that you pushed
              </p>
            <div className="col-md-10 m-auto">
              <Link to="/search-article" className="btn btn-outline-warning btn-block mt-4">
                    Search for Article
                </Link>
            </div>
            <p className="lead text-center">
                 You can view the articles approved by the moderator
              </p>
            <div className="col-md-10 m-auto">
              <Link to="/approved" className="btn btn-outline-warning btn-block mt-4">
                    Approved Articles
                </Link>
            </div>
            <p className="lead text-center">
                 You can back to option
              </p>
              <div className="col-md-10 m-auto">
              <Link to="/" className="btn btn-outline-warning btn-block mt-4">
                    Back to option
                </Link>
            </div>
              <br/>
              </div>
            </div>
          </div>
        );
      }
}

export default MainMenuUser;