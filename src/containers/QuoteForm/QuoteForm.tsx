import React, {useCallback, useState} from 'react';
import {Quote} from '../../types';
import axiosApi from '../../axiosApi.ts';

const QuoteForm: React.FC = () => {
  const [quote, setQuote] = useState<Quote>({
    author: '',
    category: '',
    quote: '',
  });
  
  const quoteChange = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {name, value} = event.target;
    
    setQuote((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);
  
  const onFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    try {
      await axiosApi.post('quotes.json', quote);
    } finally {
      console.log('submitted');
    }
  };
  
  return (
    <div>
      Submit new quote
      <form onSubmit={onFormSubmit}>
        <div>
          <label htmlFor="category">Category</label>
          <select
            onChange={quoteChange}
            value={quote.category}
            name="category"
            id="category"
            className="w-96 font-bold py-1.5 px-2 block border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
            focus:outline-none focus:border-sky-500 mb-4 mt-2"
          >
            <option disabled>Select category</option>
            <option value="star-wars">Star Wars</option>
            <option value="famous-people">Famous people</option>
            <option value="saying">Saying</option>
            <option value="humour">Humour</option>
            <option value="motivational">Motivational</option>
          </select>
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input
            onChange={quoteChange}
            value={quote.author}
            required
            id="author"
            type="text"
            name="author"
            className="w-96 font-bold py-1.5 px-2 block border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
            focus:outline-none focus:border-sky-500 mb-4 mt-2"
          />
        </div>
        <div>
          <label htmlFor="quote">Quote</label>
          <textarea
            onChange={quoteChange}
            value={quote.quote}
            required
            id="quote"
            name="quote"
            className="w-96 h-52 py-1.5 px-2 block border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
            focus:outline-none focus:border-sky-500 mt-2"
          />
        </div>
        <button>Save</button>
      </form>
    </div>
  );
};

export default QuoteForm;