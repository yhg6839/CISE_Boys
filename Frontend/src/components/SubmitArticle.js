import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../SubmitArticle.css';
import axios from 'axios';

class SubmitArticle extends Component {
  constructor() {
    super();
    this.state = {
      title:'',
      author:'',
      year_of_pub:'',
      journal_name:'',
      volume_number:'',
      doi:'',
      process_status:'',
      article_text:'',
      keywords:'',
      titleError:'',
      authorError:'',
      yobError:'',
      journalError:'',
      volumeError:'',
      doiError:''
    };
  }

  validate = () =>
  {
    let titleError = "";
    let authorError = "";
    let yobError = "";
    let journalError = "";
    let volumeError = "";
    let doiError = "";

    if(!this.state.title)
    {
      titleError = 'Title cannot be empty!';
    }
    if(!this.state.author)
    {
      authorError = 'Author cannot be empty!';
    }
    if(!this.state.year_of_pub)
    {
      yobError = 'You must type the year of publish!';
    }
    if(!this.state.journal_name)
    {
      journalError = 'Please enter the journal name!';
    }
    if(!this.state.volume_number)
    {
      volumeError = 'Volume number is required!';
    }
    if(!this.state.doi)
    {
      doiError = 'DOI must be provided!';
    }
    

    if(titleError || authorError || yobError || journalError || volumeError || doiError)
    {
      this.setState({titleError, authorError, yobError, journalError, volumeError, doiError});
      return false;
    }

    return true;
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const isVaild = this.validate();
    if(isVaild)
    {
      console.log(this.state);
    }

    const data = {
      title: this.state.title,
      author: this.state.author,
      year_of_pub: this.state.year_of_pub,
      journal_name: this.state.journal_name,
      volume_number: this.state.volume_number,
      doi: this.state.doi,
      process_status: "PendingModeration",
      article_text: this.state.article_text,
      keywords: this.state.keywords
    };

    axios
      .post('http://localhost:3006/api/articles', data)
      .then(res => {
        this.setState({
          title:'',
          author:'',
          year_of_pub:'',
          journal_name:'',
          volume_number:'',
          doi:'',
          process_status:'',
          article_text:'',
          keywords:''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in SubmitArticle!");
      })
  };


  render() {
    return (
      <div className="SubmitArticle">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Submit Article</h1>
              <form noValidate onSubmit={this.onSubmit}>
                <br />
                <div className='form-group'>
                  <input //Title
                    type='text'
                    placeholder='Title of Article'
                    name='title'
                    className='form-control'
                    value={this.state.title}
                    onChange={this.onChange}
                    id = "aTitle" onSubmit="vaildateTitle()"
                  />
                  <div style = {{color: 'red'}}>
                    {this.state.titleError}
                  </div>
                </div>

                <div className='form-group'>
                  <input //Author
                    type='text'
                    placeholder='Author'
                    name='author'
                    className='form-control'
                    value={this.state.author}
                    onChange={this.onChange}
                  />
                  <div style = {{color: 'red'}}>
                    {this.state.authorError}
                  </div>
                </div>

                <div className='form-group'>
                  <input //Year of Publication
                    type='number'
                    placeholder='Year of Publication'
                    name='year_of_pub'
                    className='form-control'
                    value={this.state.year_of_pub}
                    onChange={this.onChange}
                  />
                  <div style = {{color: 'red'}}>
                    {this.state.yobError}
                  </div>
                </div>

                <div className='form-group'>
                  <input //Journal Name
                    type='text'
                    placeholder='Journal Name'
                    name='journal_name'
                    className='form-control'
                    value={this.state.journal_name}
                    onChange={this.onChange}
                  />
                  <div style = {{color: 'red'}}>
                    {this.state.journalError}
                  </div>
                </div>

                <div className='form-group'>
                  <input //Volume Number
                    type='number'
                    placeholder='Volume Number'
                    name='volume_number'
                    className='form-control'
                    value={this.state.volume_number}
                    onChange={this.onChange}
                  />
                  <div style = {{color: 'red'}}>
                    {this.state.volumeError}
                  </div>
                </div>
                
                <div className='form-group'>
                  <input //DOI
                    type='text'
                    placeholder='DOI'
                    name='doi'
                    className='form-control'
                    value={this.state.doi}
                    onChange={this.onChange}
                  />
                  <div style = {{color: 'red'}}>
                    {this.state.doiError}
                  </div>
                </div>
                <input //Submit button
                    type="submit"
                    className="btn btn-primary"
                />
              </form>
              
              <div className="col-md-8 m-auto">
              <br />
              <Link to="/main-menu-user" className="btn btn-outline-warning btn-block mt-4">
                  Return to Menu for User
              </Link>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SubmitArticle;