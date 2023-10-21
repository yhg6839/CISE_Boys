import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../SearchArticle.css';

class SearchArticle extends Component {
  constructor() {
    super();
    this.state = {
      search:'',
      title:'',
      author:'',
      year:'',
      journal_name:'',
      searchError: ''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();    
    const query = {};

    if(this.state.search == null)
    {
      query.keywords = "";
    }
    else
    {
      query.keywords = this.state.search;
    }
    if(this.state.title == null)
    {
      query.title = "";
    }
    else
    {
      query.title = this.state.title;
    }
    if(this.state.author == null)
    {
      query.author = "";
    }
    else
    {
      query.author = this.state.author;
    }
    if(this.state.year == null)
    {
      query.year = "";
    }
    else
    {
      query.year = this.state.year;
    }
    if(this.state.journal_name == null)
    {
      query.journal_name = "";
    }
    else
    {
      query.journal_name = this.state.journal_name;
    }
    this.props.history.push('article-result', query); //sending the search query  
  };

  render() {
    return (
      <div className="SearchArticle">
        <div className="container">
          <div className="row justify-content-center"> {/* Centered content */}
            <div className="col-md-8 text-center">
              <h1>Search for an Article</h1>
            </div>
          </div>
          
          <div className="row justify-content-center"> {/* Centered content */}
            <div className="col-md-8">
              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  {/* Using array of inputs to minimize repetition */}
                  {['search', 'title', 'author', 'year', 'journal_name'].map((name, index) => (
                    <div key={index}>
                      <input
                        type='text'
                        name={name}
                        placeholder={name.charAt(0).toUpperCase() + name.slice(1)} // Capitalize the first letter
                        className='form-control'
                        onChange={this.onChange}
                      />
                      <br/>
                    </div>
                  ))}
                </div>

                <div className="text-center"> {/* Centered button */}
                  <button type="submit" className="btn btn-primary">
                    Search
                  </button>
                </div>
              </form>
              <br/>

              <div className="text-center"> {/* Centered button */}
                <Link to="/main-menu-user" className="btn btn-outline-warning">
                  Return to Menu for User
                </Link>
              </div>
              <br/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchArticle;