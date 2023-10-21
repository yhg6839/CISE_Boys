import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../ShowArticleDetails.css';
import axios from 'axios';

class ShowArticleDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {}
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3006/api/articles/article/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          article: res.data
        });
      })
      .catch(err => {
        console.log("Error from ShowArticleDetails");
      });
  }

  onDeleteClick(id) {
    axios
      .delete('http://localhost:3006/api/articles/' + id)
      .then(res => {
        this.props.history.push("/moderation");
      })
      .catch(err => {
        console.log("Error form ShowArticleDetails_deleteClick");
      });
  }

  onAccept = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      author: this.state.author,
      year_of_pub: this.state.year_of_pub,
      journal_name: this.state.journal_name,
      volume_number: this.state.volume_number,
      doi: this.state.doi,
      process_status: "PendingAnalyst",
      article_text: this.state.article_text,
      keywords: this.state.keywords
    };

    axios
      .put('http://localhost:3006/api/articles/' + this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/moderation');
      })
      .catch(err => {
        console.log("Error in Accepting Article!");
      });
  };

  render() {
    const article = this.state.article;

    return (
      <div className="article-details-page">
        <header className="details-header">
          <Link to="/moderation" className="back-button">
            ← Show Moderation List
          </Link>
          <h1>Submitted Article</h1>
          <p>Accept or Decline the Article</p>
        </header>
        <main className="details-content">
          <table className="details-table">
            <tbody>
              <tr>
                <th>Title</th>
                <td>{article.title}</td>
              </tr>
              <tr>
                <th>Author</th>
                <td>{article.author}</td>
              </tr>
              <tr>
                <th>Year of Pub</th>
                <td>{article.year_of_pub}</td>
              </tr>
              <tr>
                <th>Journal Name</th>
                <td>{article.journal_name}</td>
              </tr>
              <tr>
                <th>Vol. Number</th>
                <td>{article.volume_number}</td>
              </tr>
              <tr>
                <th>DOI</th>
                <td>{article.doi}</td>
              </tr>
            </tbody>
          </table>
        </main>
        <footer className="details-footer">
          <button className="decline-button" onClick={this.onDeleteClick.bind(this, article._id)}>Decline Article</button>
          <button className="accept-button" onClick={this.onAccept}>Accept Article</button>
        </footer>
      </div>
    );
  }
}

export default ShowArticleDetails;
