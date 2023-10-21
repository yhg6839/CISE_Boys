import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../SearchArticleDetails.css';
import axios from 'axios';

class SearchArticleDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {}
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3006/api/articles/article/'+this.props.match.params.id)
      .then(res => {
        this.setState({
          article: res.data
        })
      })
      .catch(err => {
        console.log("Error from SearchArticleDetails");
      })
  };

  render() {
    const article = this.state.article;
    let ArticleItem = 
    <div className="article-detail-card">
      <div className="article-detail-item">
        <h3>Title:</h3>
        <p>{ article.title }</p>
      </div>
      <div className="article-detail-item">
        <h3>Author:</h3>
        <p>{ article.author }</p>
      </div>
      <div className="article-detail-item">
        <h3>Year of Pub:</h3>
        <p>{ article.year_of_pub }</p>
      </div>
      <div className="article-detail-item">
        <h3>Journal Name:</h3>
        <p>{ article.journal_name }</p>
      </div>
      <div className="article-detail-item">
        <h3>Vol. Number:</h3>
        <p>{ article.volume_number }</p>
      </div>
      <div className="article-detail-item">
        <h3>DOI:</h3>
        <p>{ article.doi }</p>
      </div>
      <div className="article-detail-item">
        <h3>Article:</h3>
        <p>{ article.article_text }</p>
      </div>
    </div>

    return (
      <div className="ShowArticleDetails">
        <div className="container">
          <div className="header">
            <Link to={{pathname: `${this.props.location.state.prevPath}`, state: this.props.location.state.inputQuery}} className="back-btn">
              &#8592; Return
            </Link>
            <h1>Software Practice Empirical Evidence Database</h1>
            <p>Viewing Results</p>
          </div>
          { ArticleItem }
        </div>
      </div>
    );
  }
}

export default SearchArticleDetails;