import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../app/globals.css";

function ViewArticle() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/getArticles")
      .then((articles) => setArticles(articles.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="view-article-container">
      <div className="view-article-content">
      {/* <Link to="/">Go Back to Main</Link> */}
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Authors</th>
              <th>Source</th>
              <th>Publication Year</th>
              <th>DOI</th>
              <th>Claim</th>
              <th>Evidence</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((articles) => {
              return (
                <tr>
                  <td className="black-text">{articles.title}</td>
                  <td className="black-text">{articles.authors}</td>
                  <td className="black-text">{articles.source}</td>
                  <td className="black-text">{articles.pubyear}</td>
                  <td className="black-text">{articles.doi}</td>
                  <td className="black-text">{articles.claim}</td>
                  <td className="black-text">{articles.evidence}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewArticle;
