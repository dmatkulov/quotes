import React from 'react';
import Quotes from "../Quotes/Quotes.tsx";
import Navbar from "../../components/Navbar/Navbar.tsx";

const Home: React.FC = () => {
  return (
    <div style={{gridTemplateColumns: '200px 1fr'}}>
      <Navbar/>
      <Quotes/>
    </div>
  );
};
export default Home;