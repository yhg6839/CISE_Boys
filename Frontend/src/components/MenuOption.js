import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class MenuOption extends Component{
    constructor(props)
    {
        super(props);
    }

    render() {
        return (
          <div className="MenuOptions">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <br/>
                  <h1 className="display-4 text-center">Options</h1>
                  <br/>
                </div>
              </div>
              <br/>
              <div className="col-md-8 m-auto">
                <br/>
                <p className="lead text-center">
                Are you a user or an administrator?
              </p>
                <div className="col-md-10 m-auto">
              <Link to="/main-menu-user" className="btn btn-outline-warning btn-block mt-4">
                    User
                </Link>
            </div>
          
            <div className="col-md-10 m-auto">
              <Link to="/mainmenu" className="btn btn-outline-warning btn-block mt-4">
                    Administrator
                </Link>
            </div>
              <br/>
              </div>
            </div>
          </div>
        );
      }
}

export default MenuOption;