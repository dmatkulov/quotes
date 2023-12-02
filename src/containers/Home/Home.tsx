import React from 'react';
import Navbar from '../../components/Navbar/Navbar.tsx';
import QuoteCard from '../../components/QuoteCard/QuoteCard.tsx';

const Home: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-[200px_minmax(900px,_1fr)_100px] gap-6">
        <Navbar/>
        
        <div className="w-full">
          <QuoteCard/>
        </div>
      </div>
    </>
  );
};

export default Home;