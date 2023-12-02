import React, {useCallback, useEffect, useState} from 'react';
import QuoteCard from '../../components/QuoteCard/QuoteCard.tsx';
import {useParams} from 'react-router-dom';
import {QuoteData} from '../../types';
import axiosApi from '../../axiosApi.ts';

const Quotes: React.FC = () => {
  const params = useParams() as { quoteId: string };
  let url = 'quotes/.json';
  if (params.quoteId) {
    url = `/quotes.json?orderBy="category"&equalTo="${params.quoteId}"`;
  }
  
  const [quotes, setQuotes] = useState<QuoteData>({});
  const [isLoading, setIsLoading] = useState(false);
  
  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const quoteResponse = await axiosApi.get<QuoteData>(url);
      const fireBaseData = quoteResponse.data;
      
      const promises = Object.keys(fireBaseData).map(async (id) => {
        return {
          [id]: {
            author: fireBaseData[id].author,
            category: fireBaseData[id].category,
            quote: fireBaseData[id].quote,
          }
        };
      });
      const newQuotes = await Promise.all(promises);
      newQuotes.map((quotes) => {
        setQuotes((prevState) => ({
          ...quotes,
          ...prevState
        }));
      });
      
      if (params.quoteId) {
        const categoryFilter = newQuotes.filter((quote) => Object.values(quote)[0].category === params.quoteId);
        const selectedCategory = categoryFilter.reduce((acc, quote) => (
          {...acc, ...quote}
        ), {});
        setQuotes({...selectedCategory});
      }
    } finally {
      setIsLoading(false);
    }
  }, [params.quoteId, url]);
  
  useEffect(() => {
    void fetchData();
  }, [fetchData]);
  
  return (
    <>
      <div>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : Object.keys(quotes).length > 0 ? (
          <div>
            {Object.keys(quotes).map((id) => (
              <QuoteCard
                quote={quotes[id]}
                key={id}
                id={id}
              />
            ))}
          </div>
        ) : (
          <p>No quotes found.</p>
        )}
      </div>
    </>
  );
};

export default Quotes;