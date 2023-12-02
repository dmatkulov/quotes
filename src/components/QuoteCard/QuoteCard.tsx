import React from 'react';
import {Quote} from '../../types';

interface Props {
  quote: Quote;
  id?: string;
}
const QuoteCard: React.FC<Props> = React.memo(function QuoteCard({quote}) {
  return (
    <div>
      <h1>{quote.category}</h1>
      <div>
        <p>
          "{quote.quote}"
        </p>
        <span>{quote.author}</span>
        <div>
          <button>Delete</button>
          <button>Edit</button>
        </div>
      </div>
    </div>
  );
}, (prevProps, nextProps) => {
  return prevProps.quote.author === nextProps.quote.author && prevProps.quote.category === nextProps.quote.category;
});

export default QuoteCard;