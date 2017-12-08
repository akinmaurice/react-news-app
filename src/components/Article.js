import React from 'react';

const Article = (props) => {
    const { details } = props;
    return (
        <div className="card">
            <img className="card-img-top" src={details.urlToImage} alt="NewsImage" />
            <div className="card-block">
                <h4 className="card-title">{details.title}</h4>
                <p className="card-text">{details.description}</p>
            </div>
        </div>
    )
}

export default Article;