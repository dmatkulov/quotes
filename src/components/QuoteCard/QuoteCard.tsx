import React from 'react';
import {Quote} from '../../types';
import {Link} from 'react-router-dom';

interface Props {
  quote: Quote;
  id: string;
}
const QuoteCard: React.FC<Props> = React.memo(function QuoteCard({quote, id}) {
  return (
    <div>
      <div>
        <p>
          "{quote.quote}"
        </p>
        <span>{quote.author}</span>
        <div>
          <Link to={'/quotes/' + id + '/edit'}>Edit</Link>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}, (prevProps, nextProps) => {
  return prevProps.quote.author === nextProps.quote.author && prevProps.quote.category === nextProps.quote.category;
});

export default QuoteCard;