import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

const SubmitArticle = lazy(() => import('./components/SubmitArticle'));
const ShowArticleList = lazy(() => import('./components/ShowArticleList'));
const ShowArticleDetails = lazy(() => import('./components/ShowArticleDetails'));
const UpdateArticleInfo = lazy(() => import('./components/UpdateArticleInfo'));
const Analyst = lazy(() => import('./components/Analyst'));
const SearchArticle = lazy(() => import('./components/SearchArticle'));
const SearchArticleDetails = lazy(() => import('./components/SearchArticleDetails'));
const ArticleResult = lazy(() => import('./components/ArticleResult'));
const MainMenu = lazy(() => import('./components/MainMenu'));
const ShowApprovedArticles = lazy(() => import('./components/ShowApprovedArticles'));
const MainMenuUser = lazy(() => import('./components/MainMenuUser'));
const MenuOption = lazy(() => import('./components/MenuOption'));

const NotFoundPage = () => {
  return <div>Page Not Found</div>;
}

class App extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
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
            <Route component={NotFoundPage} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default App;
