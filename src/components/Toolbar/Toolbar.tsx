import React from 'react';
import {Link, NavLink} from 'react-router-dom';

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
              <NavLink
                to="/"
              >
                Quotes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add-quote"
              >
                Submit new quote
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Toolbar;