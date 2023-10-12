import React, { useState, useEffect } from "react";
import axios from "axios";
import "../app/moderation.css";

function Moderation() {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/api/insert-data", {
                    params: {
                        searchTerm: searchTerm,
                    },
                });
                setResults(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        if (searchTerm) {
            fetchData();
        }
    }, [searchTerm]);

    return (
        <div className="container">
            <h1>Moderation Panel</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search by title, authors, or DOI"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <ul className="results-list">
                {results.map((result) => (
                    <li key={result.id}>
                        <h3>{result.title}</h3>
                        <p>Authors: {result.authors}</p>
                        <p>Source: {result.source}</p>
                        <p>Publication Year: {result.pubyear}</p>
                        <p>DOI: {result.doi}</p>
                        <p>Summary: {result.summary}</p>
                        <button className="approve" onClick={() => {/* Approve action */ }}>Approve</button>
                        <button className="edit" onClick={() => {/* Edit action */ }}>Edit</button>
                        <button className="remove" onClick={() => {/* Remove action */ }}>Remove</button>
                    </li>
                ))}
            </ul>
            <a href="../" className="button-link">
                Go Back to Main Menu
            </a>
        </div>
    );
}

export default Moderation;
