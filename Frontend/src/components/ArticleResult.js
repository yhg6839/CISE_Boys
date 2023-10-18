import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ArticleResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    const query = this.props.location.state;

    axios
      .post('http://localhost:8082/api/articles/search', query) //get all the articles that match the query parameters
      .then(res => {
        this.setState({
          articles: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowArticleList');
      })
  };

  //Rendering the table to show search results
  renderTableHeader() {
    return(
      [
      <th key={"title"}>{"Title"}</th>,
      <th key={"author"}>{"Author"}</th>,
      <th key={"source"}>{"Source"}</th>,
      <th key={"year"}>{"Year"}</th>,
      <th key={"claim"}>{"Claim"}</th>]
    )}

    renderTableData()
    {
      const articles = this.state.articles;
      const query = this.props.location.state;
      //Display the articles found from the query with their details
      if(!articles) {
        console.log("No Articles Found");
      } else {
        return articles.map((article, k) => {
          const { title, author, source, pubyear, claim, evidence } = article
          return (
             <tr key={title}>
                <td><Link to={{state: { prevPath: window.location.pathname, inputQuery: query }}}>{title}</Link></td> {/* Linked to view article text */}
                <td>{author}</td>
                <td>{source}</td>
                <td>{pubyear}</td>
                <td>{claim}</td>
             </tr>
          )
       }) 
      }
    }

  render() {
    return (
      <div className="ShowArticleList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Results of articles</h2>
              <br/>
            </div>

            {/* Navigation Bar */}
            <div className="rowC">
                <Link to="/" className="btn btn-outline-warning">
                  Return to Menu
                </Link>
            </div>
          </div>
          <br/>
          <div className="tableList">
              <table id="articles">
                <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
                </tbody>
              </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleResult;