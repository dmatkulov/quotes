import React, {useCallback, useEffect, useState} from 'react';
import QuoteCard from '../../components/QuoteCard/QuoteCard.tsx';
import {useParams} from 'react-router-dom';
import {QuoteData} from '../../types';
import axiosApi from '../../axiosApi.ts';
// import {LinkItems} from '../../lib/constants.ts';

const Quotes: React.FC = () => {
  const params = useParams() as {quoteId: string};
  let url = 'quotes/.json';
  if (params.quoteId) {
    url = `/quotes.json?orderBy="category"&equalTo="${params.quoteId}"`;
  }
  
  const [quotes, setQuotes] = useState<QuoteData>({});
  const [isLoading, setIsLoading] = useState(false);
  
  
  const fetchData = useCallback( async () => {
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
        console.log(newQuotes);
        if (params.quoteId) {
          newQuotes.forEach((quotes) => {
            setQuotes({
              ...quotes,
            });
          });
        } else {
          newQuotes.forEach((quotes) => {
            setQuotes((prevState) => ({
              ...quotes,
              ...prevState,
            }));
          });
        }
    } finally {
      setIsLoading(false);
    }
  }, [url, params.quoteId]);
  
  useEffect(() => {
    void fetchData();
  }, [fetchData]);
  
  
  
  // const formattedTitle = useCallback((category: string) => {
  //   const words = category.split('-');
  //
  // }, []);
  //
  // let title = null;
  //
  // Object.keys(quotes).map((id) => {
  //   switch (quotes[id].category) {
  //     case 'star-wars':
  //       title = 'Star Wars';
  //       break;
  //     case 'famous-people':
  //       title = 'Famous people';
  //       break;
  //     default:
  //       title = 'All';
  //   }
  // });
  
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