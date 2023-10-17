import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import SubmitArticle from './components/SubmitArticle';
import ShowArticleList from './components/ShowArticleList';
import ShowArticleDetails from './components/ShowArticleDetails';
import UpdateArticleInfo from './components/UpdateArticleInfo';
import Analyst from './components/Analyst';
import SearchArticle from './components/SearchArticle'
import SearchArticleDetails from './components/SearchArticleDetails'
import ArticleResult from './components/ArticleResult';
import MainMenu from './components/MainMenu';
import ShowApprovedArticles from './components/ShowApprovedArticles';
import MainMenuUser from './components/MainMenuUser';
import MenuOption from './components/MenuOption';

class App extends Component {
  render() {
    
    return (
      <Router>
        <div>
          <Route path='/article-result' component={ArticleResult} />
          <Route path='/edit-article/:id' component={UpdateArticleInfo} />
          <Route path='/search-article/:id' component={SearchArticleDetails} />
          <Route path='/show-article/:id' component={ShowArticleDetails} />
          <Route path='/moderation' component={ShowArticleList} />
          <Route path='/submit-article' component={SubmitArticle} />
          <Route path='/analyst' component={Analyst} />
          <Route path='/search-article' component={SearchArticle} />
          <Route path='/approved' component={ShowApprovedArticles} />
          <Route path='/mainmenu' component={MainMenu} />
          <Route path='/main-menu-user' component={MainMenuUser} />
          <Route exact path='/' component={MenuOption} />
        </div>
      </Router>
    );
  }
}

export default App;