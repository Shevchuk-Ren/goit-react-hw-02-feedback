import React from 'react';


const FeedBack = ({good, neutral, bad }) => (
    <div className="buttons__set">
        <button type="button" className="button" onClick={good}>Good</button>
        <button type="button" className="button" onClick={neutral}>Neutral</button>
        <button type="button" className="button" onClick={bad}>Bad</button>
    </div>
                  
);
export default FeedBack;
