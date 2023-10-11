import React, { useState } from "react";
import axios from "axios";
import "../app/submitarticle.css";

function DataForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    authors: "",
    source: "",
    pubyear: "",
    doi: "",
    claim: "",
    evidence: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/api/insert-data",
        {
          title: formData.title,
          authors: formData.authors,
          source: formData.source,
          pubyear: formData.pubyear,
          doi: formData.doi,
          claim: formData.claim,
          evidence: formData.evidence,
        }
      );
      console.log("Data inserted:", response.data);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error inserting data:", error);
    }
  };

  return (
    <div className="container">
      {isSubmitted ? (
        <div className="container">
          {isSubmitted ? (
            <div className="success-message">
              Article submitted successfully!
            </div>
          ) : (
            <>
              <h1>Submit an article!!</h1>
              <form onSubmit={handleSubmit}>
                {/* Your form fields */}
                <button type="submit">Submit</button>
              </form>
              <a href="../" className="button-link">
                Go Back to Main Menu
              </a>
            </>
          )}
          {isSubmitted && (
            <div className="outside-links">
              <a href="../">Go Back to Main Menu</a>
              <br></br>
              <a href="./SubmitArticle">Submit Another Article</a>
            </div>
          )}
        </div>
      ) : (
        <>
          <h1>Submit an article!!</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
              required
            />

            <label htmlFor="authors">Authors:</label>
            <input
              type="text"
              name="authors"
              id="authors"
              value={formData.authors}
              onChange={handleChange}
              required
            />

            <label htmlFor="source">Source:</label>
            <input
              type="text"
              name="source"
              id="source"
              value={formData.source}
              onChange={handleChange}
              required
            />

            <label htmlFor="pubyear">Publication Year:</label>
            <input
              type="number"
              name="pubyear"
              id="pubyear"
              value={formData.pubyear}
              onChange={handleChange}
              required
            />

            <label htmlFor="doi">DOI:</label>
            <input
              type="text"
              name="doi"
              id="doi"
              value={formData.doi}
              onChange={handleChange}
              required
            />

            <label htmlFor="claim">Claim:</label>
            <input
              type="text"
              name="claim"
              id="claim"
              value={formData.claim}
              onChange={handleChange}
              required
            />

            <label htmlFor="evidence">Evidence:</label>
            <input
              type="text"
              name="evidence"
              id="evidence"
              value={formData.evidence}
              onChange={handleChange}
              required
            />

            <button type="submit">Submit</button>
          </form>
          <a href="../" className="button-link">
            Go Back to Main Menu
          </a>
        </>
      )}
    </div>
  );
}

export default DataForm;
