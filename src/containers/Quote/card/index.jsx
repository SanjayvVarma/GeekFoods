import React from 'react';
import './style.css';

export const QuoteCard = (props) => {
  return (
    <div className='container'>
        <p>{props.description}</p>
        <span className='author-text'>{props.author}</span>
    </div>
  )
}

export default QuoteCard;