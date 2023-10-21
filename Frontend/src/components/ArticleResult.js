import React, { Component } from 'react';
import '../ArticleResult.css';
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
      .post('http://localhost:3006/api/articles/search', query)
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
      <th key={"year"}>{"Year"}</th>,
      <th key={"journal"}>{"Journal Name"}</th>,
      <th key={"volume"}>{"Volume No."}</th>]
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
          const { _id, title, author, year_of_pub, journal_name, volume_number } = article
          return (
             <tr key={title}>
                <td><Link to={{pathname: `/search-article/${_id}`, state: { prevPath: window.location.pathname, inputQuery: query }}}>{title}</Link></td> {/* Linked to view article text */}
                <td>{author}</td>
                <td>{year_of_pub}</td>
                <td>{journal_name}</td>
                <td>{volume_number}</td>
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