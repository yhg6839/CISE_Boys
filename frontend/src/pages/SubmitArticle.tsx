import React, { useState } from "react";
import axios from "axios";
import "../app/submitarticle.css";

function DataForm() {
  const [formData, setFormData] = useState({
    title: "",
    authors: [""],
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
      const response = await axios.post("/api/insert-data", formData);
      console.log("Data inserted:", response.data);
    } catch (error) {
      console.error("Error inserting data:", error);
    }
  };

  // Functions to handle authors
  const addAuthor = () => {
    setFormData({ ...formData, authors: [...formData.authors, ""] });
  };

  const changeAuthor = (index, value) => {
    const updatedAuthors = [...formData.authors];
    updatedAuthors[index] = value;
    setFormData({ ...formData, authors: updatedAuthors });
  };

  const removeAuthor = (index) => {
    const updatedAuthors = [...formData.authors];
    updatedAuthors.splice(index, 1);
    setFormData({ ...formData, authors: updatedAuthors });
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

        <label>Authors:</label>
        {formData.authors.map((author, index) => (
          <div key={`author-${index}`}>
            <input
              type="text"
              name={`authors`}
              value={author}
              onChange={(e) => changeAuthor(index, e.target.value)}
              required
            />
            <button
              onClick={() => removeAuthor(index)}
              style={{ marginLeft: "3rem" }}
              type="button"
            >
              -
            </button>
          </div>
        ))}
        <button
          onClick={addAuthor}
          style={{ marginLeft: "auto" }}
          type="button"
        >
          +
        </button>

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
