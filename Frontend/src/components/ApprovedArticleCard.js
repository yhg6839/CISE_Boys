import React from 'react';
import '../App.css';

const ApprovedArticleCard = (props) => {
    const article  = props.article;

    //Create a card for the article that includes a link to its moderation page, analysis page, and show its detials on it
    return(
        <div className="card-container">
            <img src="https://static-ppimages.freetls.fastly.net/nielsens/9781912697274.jpg?canvas=300,300&fit=bounds&height=300&mode=max&width=300&404=default.jpg" alt="" />
            <div className="desc">

                <h2>{article.title}</h2>
                <h3>{article.author}</h3>
                <p>{article.year_of_pub}</p>
            </div>
        </div>
    )
};

export default ApprovedArticleCard;