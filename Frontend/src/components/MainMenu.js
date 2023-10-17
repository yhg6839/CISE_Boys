import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainMenu extends Component{
    constructor(props)
    {
        super(props);
    }

    render() {
        return (
          <div className="MainMenu">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <br/>
                  <h1 className="display-4 text-center">Main Menu for Administrator</h1>
                  <br/>
                </div>
              </div>
              <br/>
              <div className="col-md-8 m-auto">
                <br/>
            <p className="lead text-center">
                 SERC moderator will check quality and decide whether to accept
              </p>
            <div className="col-md-10 m-auto">
              <Link to="/moderation" className="btn btn-outline-warning btn-block mt-4">
                    Moderation
                </Link>
            </div>
            <p className="lead text-center">
            SERC analyst will analyze the uploaded article and decide if it can be passed to the database
              </p>
            <div className="col-md-10 m-auto">
              <Link to="/analyst" className="btn btn-outline-warning btn-block mt-4">
                    Analysis article
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

export default MainMenu;