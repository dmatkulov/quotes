import React from 'react';
import {LinkItem} from '../../types';
import {Link} from 'react-router-dom';

interface Props {
  linkItem: LinkItem
}
const NavbarItem: React.FC<Props> = ({linkItem}) => {
  return (
    <>
      <li className="pb-3 mb-2 border-b border-amber-300"
      >
        <Link
          to={'quotes' + linkItem.id}
        >
          {linkItem.category}
        </Link>
      </li>
    </>
  );
};

export default NavbarItem;