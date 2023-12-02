import React from 'react';
import {LinkItem} from '../../types';
import {NavLink} from 'react-router-dom';

interface Props {
  linkItem: LinkItem
}
const NavbarItem: React.FC<Props> = ({linkItem}) => {
  return (
    <>
      <li className="border-b border-amber-300"
      >
        <NavLink
          to={'/quotes/' + linkItem.id}
        >
          {linkItem.category}
        </NavLink>
      </li>
    </>
  );
};

export default NavbarItem;