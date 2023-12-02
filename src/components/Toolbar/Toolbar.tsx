import React from 'react';
import {Link} from 'react-router-dom';

const Toolbar: React.FC = () => {
  return (
    <>
      <div className="flex justify-between px-10 py-5 mt-4 mb-10 bg-amber-300 rounded-full">
        <strong>
          <Link to="/">Quotes Central</Link>
        </strong>
        <nav>
          <ul className="flex gap-5">
            <li>
              <Link
                to="/"
              >
                Quotes
              </Link>
            </li>
            <li>
              <Link
                to="/quotes/add-quote"
              >
                Submit new quote
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Toolbar;