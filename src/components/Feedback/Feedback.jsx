import React from 'react';
import { Button } from './Feedback.styled'
import PropTypes  from 'prop-types';


const FeedBack = ({good, neutral, bad }) => (
    <div className="buttons__set">
        <Button type="button"  onClick={good}>Good</Button>
        <Button type="button"  onClick={neutral}>Neutral</Button>
        <Button type="button"  onClick={bad}>Bad</Button>
    </div>
                  
);
FeedBack.propTypes = {
    good: PropTypes.func.isRequired,
    neutral: PropTypes.func.isRequired,
    bad:  PropTypes.func.isRequired
};
export default FeedBack;
