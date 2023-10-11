import React, { useState } from "react";
import axios from "axios";
import "../app/submitarticle.css";

function DataForm() {
  const [formData, setFormData] = useState({
    title: "",
    authors: "",
    source: "",
    pubyear: "",
    doi: "",
    summary: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/api/insert-data", {
        title: formData.title,
        authors: formData.authors,
        source: formData.source,
        pubyear: formData.pubyear,
        doi: formData.doi,
        claim: "", // If 'claim' and 'evidence' are required fields, provide appropriate values.
        evidence: "",
      });
      console.log("Data inserted:", response.data);
    } catch (error) {
      console.error("Error inserting data:", error);
    }
  };

  return (
    <div className="container">
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

        <label htmlFor="summary">Summary:</label>
        <textarea
          name="summary"
          value={formData.summary}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default DataForm;
