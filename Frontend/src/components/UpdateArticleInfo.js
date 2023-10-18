import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateArticleInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title:'',
        author:'',
        source:'',
        pubyear:'',
        doi:'',
        claim:'',
        evidence:'',
        process_status:''
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/articles/'+this.props.match.params.id) //get the article whose status will be updated
      .then(res => {
        this.setState({ //store the new data inside
          title: res.data.title,
          author: res.data.author,
          year_of_pub: res.data.year_of_pub,
          journal_name: res.data.journal_name,
          volume_number: res.data.volume_number,
          doi: res.data.doi,
          process_status: res.data.process_status,
          article_text: res.data.article_text,
          keywords: res.data.keywords,
          Analysis: res.data.Analysis
        })
      })
      .catch(err => {
        console.log("Error from UpdateArticleInfo");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      author: this.state.author,
      year_of_pub: this.state.year_of_pub,
      journal_name: this.state.journal_name,
      volume_number: this.state.volume_number,
      doi: this.state.doi,
      process_status: "Live",
      article_text: this.state.article_text,
      keywords: this.state.keywords,
      Analysis: this.state.Analysis
    };

    axios
      .put('http://localhost:8082/api/articles/'+this.props.match.params.id, data) //send updated data in database
      .then(res => {
        this.props.history.push('/analyst'); //return to analyst page
      })
      .catch(err => {
        console.log("Error in UpdateArticleInfo!");
      })
  };

  render() {
    return (
      <div className="UpdateArticleInfo">
        <div className="container">
          <div className="row">
          
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Analysis Article</h1>
              <p className="lead text-center">
                  Add commits and Article Text
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
          <p className="lead text-center">
                 (1) Does the title meet the requirements?
              </p>
            <div className='form-group'>
              <input //Keywords to be added
                type='text'
                placeholder='Yes/No'
                name='Judge'
                className='form-control'
                value={this.state.keywords}
                onChange={this.onChange}
              />
            </div>
            <p className="lead text-center">
                 (2) Does the author match the title?
              </p>
           <div className='form-group'>
              <input //Article text to be added
                placeholder='Yes/No'
                name='Judge'
                className='form-control'
                value = {this.state.Analysis}
                onChange={this.onChange}
              />
            </div>
            <p className="lead text-center">
                 (3) Is the year of publication correct?
              </p>
           <div className='form-group'>
              <input 
                placeholder='Yes/No'
                name='Judge'
                className='form-control'
                value = {this.state.year_of_pub}
                onChange={this.onChange}
              />
            </div>
            <p className="lead text-center">
                 (4) Does the DOI conflict with the data in the database?
              </p>
           <div className='form-group'>
              <input 
                placeholder='Yes/No'
                name='Judge'
                className='form-control'
                value = {this.state.doi}
                onChange={this.onChange}
              />
            </div>
            <p className="lead text-center">
                 (5) Comments for analysis articles
              </p>
            <div className='form-group'>
              <textarea 
                placeholder='Article Text'
                name='article_text'
                className='form-control'
                value = {this.state.article_text}
                onChange={this.onChange}
              />
            </div>
            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Allow articles to enter the database</button>
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/moderation" className="btn btn-outline-info btn-lg btn-block">
                  Deny articles to the database 
              </Link>
            </div>

            <div className="col-md-8 m-auto">
              <br />
              <Link to="/analyst" className="btn btn-outline-info btn-lg btn-block">
                  Return to Analyst 
              </Link>
            </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateArticleInfo;