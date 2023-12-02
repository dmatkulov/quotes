import React from 'react';
import {Quote} from '../../types';
import {Link} from 'react-router-dom';
interface Props {
  quote: Quote;
  id: string;
  onDelete: (id: string) => void;
}
const QuoteCard: React.FC<Props> = React.memo(function QuoteCard({quote, id, onDelete}) {
  
  return (
    <div className="flex flex-col justify-between bg-white px-6 py-4 rounded-lg mb-3 gap-5">
      <div className="border-b pb-3 grow">
        <p className="text-gray-400 mb-3">{quote.author}</p>
        <p className="font-bold mb-2 grow">
          "{quote.quote}"
        </p>
      </div>
        <div className="flex items-stretch gap-3">
          <Link
            className="bg-blue-500 px-3 py-1 rounded-md text-white text-center"
            to={'/quotes/' + id + '/edit'}>Edit</Link>
          <button
            className="bg-red-500 px-3 py-1 rounded-md text-white"
            onClick={() => onDelete(id)}>Delete</button>
        </div>
    </div>
  );
}, (prevProps, nextProps) => {
  return prevProps.quote.author === nextProps.quote.author && prevProps.quote.category === nextProps.quote.category;
});

export default QuoteCard;