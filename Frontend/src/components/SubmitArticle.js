import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class SubmitArticle extends Component {
  constructor() {
    super();
    this.state = {
      title:'',
      author:'',
      source:'',
      pubyear:'',
      doi:'',
      claim:'',
      evidence:'',
      process_status:'',
      titleError:'',
      authorError:'',
      sourceError:'',
      pubyearError:'',
      doiError:'',
      claimError:'',
      evidenceError:''
    };
  }

  validate = () =>
  {
    let titleError = "";
    let authorError = "";
    let sourceError = "";
    let pubyearError = "";
    let doiError = "";
    let claimError = "";
    let evidenceError = "";

    if(!this.state.title)
    {
      titleError = 'Title cannot be empty!';
    }
    if(!this.state.author)
    {
      authorError = 'Author cannot be empty!';
    }
    if(!this.state.source)
    {
      sourceError = 'Source cannot be empty!';
    }
    if(!this.state.pubyear)
    {
      pubyearError = 'Please enter the valid year!';
    }
    if(!this.state.doi)
    {
      doiError = 'DOI must be provided!';
    }
    if(!this.state.claim)
    {
      claimError = 'Claim cannot be empty!';
    }
    if(!this.evidence)
    {
      evidenceError = 'Evidence cannot be empty!';
    }
    

    if(titleError || authorError || sourceError || pubyearError || doiError || claimError || evidenceError)
    {
      this.setState({titleError, authorError, sourceError, pubyearError, doiError, claimError, evidenceError});
      return false;
    }

    return true;
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //When submitting article, store its details and set its status to PendingModeration
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
      source: this.state.source,
      pubyear: this.state.pubyear,
      doi: this.state.doi,
      claim: this.state.claim,
      evidence: this.state.evidence,
      process_status: "PendingModeration"
    };

    axios
      .post('http://localhost:8082/api/articles', data) //send data to database then empty form details
      .then(res => {
        this.setState({
          title: '',
          authors: '',
          source: '',
          pubyear: '',
          doi: '',
          claim: '',
          evidence: '',
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
              <p className="lead text-center">
                  Add Biblio Details
              </p>
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
                  <input //Source
                    type='text'
                    placeholder='Source'
                    name='source'
                    className='form-control'
                    value={this.state.source}
                    onChange={this.onChange}
                  />
                  <div style = {{color: 'red'}}>
                    {this.state.sourceError}
                  </div>
                </div>

                <div className='form-group'>
                  <input //Year
                    type='number'
                    placeholder='Year of public'
                    name='pubyear'
                    className='form-control'
                    value={this.state.pubyear}
                    onChange={this.onChange}
                  />
                  <div style = {{color: 'red'}}>
                    {this.state.pubyearError}
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

                <div className='form-group'>
                  <input //claim
                    type='text'
                    placeholder='Claim'
                    name='claim'
                    className='form-control'
                    value={this.state.claim}
                    onChange={this.onChange}
                  />
                  <div style = {{color: 'red'}}>
                    {this.state.claimError}
                  </div>
                </div>

                <div className='form-group'>
                  <input //Evidence
                    type='text'
                    placeholder='Evidence'
                    name='evidence'
                    className='form-control'
                    value={this.state.evidence}
                    onChange={this.onChange}
                  />
                  <div style = {{color: 'red'}}>
                    {this.state.evidenceError}
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