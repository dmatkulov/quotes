import React, {useCallback, useEffect, useState} from 'react';
import {Quote} from '../../types';
import axiosApi from '../../axiosApi.ts';
import {useNavigate, useParams} from "react-router-dom";

const QuoteForm: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams() as { quoteId: string };
  const url = 'quotes/' + params.quoteId + '.json';
  
  
  const [quote, setQuote] = useState<Quote>({
    author: '',
    category: '',
    quote: '',
  });
  
  const fetchExistingPost = useCallback(async () => {
    try {
      const postResponse = await axiosApi.get<Quote>(url);
      
      setQuote(postResponse.data);
    } finally {
      console.log('edited');
    }
  }, [url]);
  
  useEffect(() => {
    if (params.quoteId) {
      void fetchExistingPost();
    }
  }, [params.quoteId, fetchExistingPost]);
  
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
      if (params.quoteId) {
        await axiosApi.put(`quotes/${params.quoteId}.json`, quote);
      } else {
        await axiosApi.post('quotes.json', quote);
      }
    } finally {
      navigate('/');
      console.log('submitted');
    }
  };
  
  let title = 'Submit new quote';
  
  if (params.quoteId) {
    title = 'Edit quote';
  }
  
  return (
    <div>
      {title}
      <form onSubmit={onFormSubmit} className="w-96">
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
            <option>Select category</option>
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
        <button
          className="px-4 py-2 bg-blue-700 text-white rounded-md mt-8 w-full mb-4"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default QuoteForm;