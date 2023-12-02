import React from 'react';
import Quotes from "../Quotes/Quotes.tsx";
import Navbar from "../../components/Navbar/Navbar.tsx";

const Home: React.FC = () => {
  return (
    <div className="grid grid-cols-[200px_minmax(900px,_1fr)_100px] gap-6">
      <Navbar/>
      <Quotes/>
    </div>
  );
};
export default Home;