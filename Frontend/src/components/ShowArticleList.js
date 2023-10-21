import React, { Component } from 'react';
import '../ShowArticleList.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ArticleCard from './ArticleCard';

class ShowArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3006/api/articles/PendingModeration/')
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
      articleList = <p>There is no article record!</p>;
    } else {
      articleList = articles.map((article, k) =>
        <ArticleCard article={article} key={k} />
      );
    }

    return (
      <div className="moderator-page">
        <header className="mod-header">
            <h2>Moderator Page</h2>
        </header>
        <main className="mod-content">
            {articleList} 
        </main>
        <footer className="mod-footer">
            <Link to="/mainmenu" className="btn-back">
                Return to Menu for Administrator
            </Link>
        </footer>
      </div>
    );
  }
}

export default ShowArticleList;