import React, { Component } from 'react';
import '../ShowApprovedArticles.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ApprovedArticleCard from './ApprovedArticleCard';

class ShowApprovedArticles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3006/api/articles/Live/')
      .then(res => {
        this.setState({
          articles: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowArticleList');
      })
  };


  render() {
    const articles = this.state.articles;
    let articleList;

    if(!articles || articles.length === 0) {
      articleList = <p className="no-article-msg">There is no article record!</p>;
    } else {
      articleList = articles.map((article, k) =>
        <ApprovedArticleCard article={article} key={k} />
      );
    }

    return (
      <div className="ShowArticleList">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>Approved Articles</h2>
            </div>
          </div>
          <div className="list mt-5">
            {articleList}
          </div>
          <div className="row justify-content-center mt-5">
            <Link to="/main-menu-user" className="btn return-btn">
              Return to Menu for User
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowApprovedArticles;