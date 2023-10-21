import React from 'react';
import { Link } from 'react-router-dom';
import '../AnalystCard.css';

const AnalystCard = (props) => {
    const article  = props.article;

    return(
        <div className="card-container">
            <img src="https://edit.org/images/cat/book-covers-big-2019101610.jpg" alt="" />
            <div className="desc">
                
                <div className="links">
                <h2>
                    <Link to={`/edit-article/${article._id}`}>
                        { "Analyst" }
                    </Link>
                </h2>
                </div>
                <h2>{article.title}</h2>
                <h3>{article.author}</h3>
                <p>{article.year_of_pub}</p>
            </div>
        </div>
    )
};

export default AnalystCard;