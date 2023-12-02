import React from 'react';
import {LinkItems} from '../../lib/constants.ts';
import NavbarItem from './NavbarItem.tsx';
const Navbar: React.FC = () => {
  return (
    <aside className="block bg-amber-100 rounded-lg px-4 py-4">
      <ul>
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