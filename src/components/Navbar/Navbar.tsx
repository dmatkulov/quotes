import React from 'react';
import {LinkItems} from '../../lib/constants.ts';
import NavbarItem from './NavbarItem.tsx';
import {Link} from 'react-router-dom';
const Navbar: React.FC = () => {
  return (
    <aside className="block bg-amber-100 rounded-lg px-4 py-4">
      <ul>
        <li className="pb-3 mb-2 border-b border-amber-300">
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
    </aside>
  );
};

export default Navbar;