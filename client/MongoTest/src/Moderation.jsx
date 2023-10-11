import React, { Component, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

interface SearchState {
  search: string;
  title: string;
  authors: string;
  pubyear: string;
  doi: string;
  claim: string;
  evidence: string;
  searchError: string;
}

class SearchArticle extends Component<any, SearchState> {
  constructor(props: any) {
    super(props);
    this.state = {
      search: '',
      title: '',
      authors: '',
      pubyear: '',
      doi: '',
      claim: '',
      evidence: '',
      searchError: ''
    };
  }

  onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      ...prevState,
      [name]: value
    }) as SearchState);
  };

  onSubmit = (e: FormEvent) => {
    e.preventDefault();    
    const query: Record<string, string> = {};

    query.keywords = this.state.search ?? "";
    query.title = this.state.title ?? "";
    query.authors = this.state.authors ?? "";
    query.pubyear = this.state.pubyear ?? "";
    query.doi = this.state.doi ?? "";
    query.claim = this.state.claim ?? "";
    query.evidence = this.state.evidence ?? "";

    this.props.history.push('article-result', query);  
  };

  render() {
    return (
      <div className="SearchArticle">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br/>
              <h1 className="display-4 text-center">Search for an Article</h1>
              <br/>
            </div>
          </div>
          <br/>
          <div className="col-md-8 m-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  name='search'
                  placeholder='Keywords'
                  className='form-control'
                  onChange={this.onChange}
                />
                <br/>
                <input
                  type='text'
                  name='title'
                  placeholder='Title'
                  className='form-control'
                  onChange={this.onChange}
                />
                <br/>
                <input
                  type='text'
                  name='authors'
                  placeholder='Authors'
                  className='form-control'
                  onChange={this.onChange}
                />
                <br/>
                <input
                  type='text'
                  name='pubyear'
                  placeholder='Publication Year'
                  className='form-control'
                  onChange={this.onChange}
                />
                <br/>
                <input
                  type='text'
                  name='doi'
                  placeholder='DOI'
                  className='form-control'
                  onChange={this.onChange}
                />
              </div>
              <input
                type="submit"
                className="btn btn-primary"
                onClick = { this.onSubmit }
              />
            </form>
            <br/>
            <div className="rowC">
              <Link to="/main-menu-user" className="btn btn-outline-warning">
                Return to Menu for User
              </Link>
            </div>
            <br/>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchArticle;
