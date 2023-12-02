import React from 'react';
import {LinkItems} from '../../lib/constants.ts';
import NavbarItem from './NavbarItem.tsx';
import {Link} from 'react-router-dom';
const Navbar: React.FC = () => {
  return (
    <div className="bg-amber-100 rounded-lg px-4 py-4 mb-10">
      <ul className="flex justify-between px-20 items-center">
        <li className="border-b border-amber-300">
          <Link to="/">
            All
          </Link>
        </li>
        {LinkItems.map((linkItem) => (
          <NavbarItem
            linkItem={linkItem}
            key={linkItem.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default Navbar;