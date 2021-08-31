import React from 'react';


const Statistics = ({ good, neutral, bad, total, positivePercentage, onLeaveFeedback}) => (
    <div className="statistics__set">
        {good === 0 && neutral === 0 && bad === 0 ?
            <p>{onLeaveFeedback}</p>
            :
            <div >
                <p>Good: {good}</p>
                <p>Neutral: { neutral} </p>
                <p>Bad: {bad}</p>
                 <p>Total: {total}</p>
                <p>Positive feedback: {positivePercentage}%</p>
            </div>
        }
    </div>
                  
);
export default Statistics;

