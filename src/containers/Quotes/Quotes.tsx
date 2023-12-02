import React, {useCallback, useEffect, useState} from 'react';
import QuoteCard from '../../components/QuoteCard/QuoteCard.tsx';
import {Link, useParams} from 'react-router-dom';
import {QuoteData} from '../../types';
import axiosApi from '../../axiosApi.ts';
import Spinner from "../../components/Spinner/Spinner.tsx";
import Title from "../../components/Title/Title.tsx";

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
  
  let title = 'All';
  
  if (params.quoteId) {
      switch (params.quoteId) {
        case 'famous-people':
          title = 'Famous people';
          break;
        case 'star-wars':
          title = 'Star Wars';
          break;
        case 'humour':
          title = 'Humour';
          break;
        case 'motivational':
          title = 'Motivational';
          break;
        case 'saying':
          title = 'Saying';
          break;
        default:
          title = 'All';
      }
  }
  
  
  return (
    <div className="w-full">
      <Title title={title}/>
      <div>
        {isLoading ? (
          <Spinner/>
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
          <div className="text-center mt-10">
            <p className="mb-10">No quotes found</p>
            <Link
              className="px-4 py-2 bg-blue-700 text-white rounded-md mt-8 w-full mb-4"
              to="/quotes/add-quote"
            >
              Add new quote
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quotes;