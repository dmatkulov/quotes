import React, {useCallback} from 'react';
import {Quote, QuoteData} from '../../types';
import {Link, useNavigate} from 'react-router-dom';
import axiosApi from "../../axiosApi.ts";

interface Props {
  quote: Quote;
  id: string;
}
const QuoteCard: React.FC<Props> = React.memo(function QuoteCard({quote, id}) {
  const navigate = useNavigate();
  
  const deletePost = useCallback(async (quoteId: string) => {
    try {
      await axiosApi.delete<QuoteData>('quotes/' + quoteId + '.json');
    } finally {
      navigate('/');
    }
  }, [navigate]);
  
  
  return (
    <div className="flex justify-between bg-white px-6 py-4 rounded-lg mb-3">
      <div>
        <p className="font-bold">
          "{quote.quote}"
        </p>
        <span>{quote.author}</span>
      </div>
        <div className="flex items-center gap-3">
          <Link
            className="bg-blue-500 px-3 py-1 rounded-md text-white"
            to={'/quotes/' + id + '/edit'}>Edit</Link>
          <button
            className="bg-red-500 px-3 py-1 rounded-md text-white"
            onClick={() => deletePost(id)}>Delete</button>
        </div>
    </div>
  );
}, (prevProps, nextProps) => {
  return prevProps.quote.author === nextProps.quote.author && prevProps.quote.category === nextProps.quote.category;
});

export default QuoteCard;