import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../app/viewarticle.css";

function ViewArticle() {
  const [filterBy, setFilterBy] = useState(""); // To track the selected filter option (evidence, claim, pubyear)
  const [filterValue, setFilterValue] = useState(""); // To store the selected filter value

  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/getArticles")
      .then((articles) => setArticles(articles.data))
      .catch((err) => console.log(err));
  }, []);

  const claimOptions = ["", "Code Quality Improvement", "Product Quality Improvement"];
  const evidenceOptions = ["", "Strong Support", "Weak Support"];

  const filteredArticles = articles.filter((article) => {
    if (filterBy === "claim") {
      return article.claim === filterValue;
    }
    if (filterBy === "evidence") {
      return article.evidence === filterValue;
    }
    return true;
  });

  return (
    <div className="view-article-container">
      <div className="view-article-content">
        <label htmlFor="claimFilter">Filter by Claim:</label>
        <select
          name="claimFilter"
          id="claimFilter"
          value={filterBy === "claim" ? filterValue : ""}
          onChange={(e) => {
            setFilterBy("claim");
            setFilterValue(e.target.value);
          }}
        >
          {claimOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button
          onClick={() => {
            setFilterBy("");
            setFilterValue("");
          }}
        >
          Clear Claim Filters
        </button>

        <label htmlFor="evidenceFilter">Filter by Evidence:</label>
        <select
          name="evidenceFilter"
          id="evidenceFilter"
          value={filterBy === "evidence" ? filterValue : ""}
          onChange={(e) => {
            setFilterBy("evidence");
            setFilterValue(e.target.value);
          }}
        >
          {evidenceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button
          onClick={() => {
            setFilterBy("");
            setFilterValue("");
          }}
        >
          Clear Evidence Filters
        </button>

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
            {filteredArticles.map((article) => (
              <tr key={article.id}>
                <td className="black-text">{article.title}</td>
                <td className="black-text">{article.authors}</td>
                <td className="black-text">{article.source}</td>
                <td className="black-text">{article.pubyear}</td>
                <td className="black-text">{article.doi}</td>
                <td className="black-text">{article.claim}</td>
                <td className="black-text">{article.evidence}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <a href="../" className="button-link">
        Go Back to Main Menu
      </a>
    </div>
  );
}

export default ViewArticle;
