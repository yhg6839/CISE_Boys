import React, { useState } from 'react';

function ArticleSubmissionForm() {
  const [authors, setAuthors] = useState([]);
  const [articleData, setArticleData] = useState({
    title: '',
    source: '',
    pubyear: '',
    doi: '',
    claim: '',
    evidence: '',
  });

  const addAuthor = () => {
    setAuthors([...authors, '']);
  };

  const handleAuthorChange = (index, event) => {
    const newAuthors = [...authors];
    newAuthors[index] = event.target.value;
    setAuthors(newAuthors);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setArticleData({ ...articleData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div>
      <h2>Article Submission Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={articleData.title}
            onChange={handleInputChange}
          />
        </div>
        {/* Add similar input fields for other form elements */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ArticleSubmissionForm;