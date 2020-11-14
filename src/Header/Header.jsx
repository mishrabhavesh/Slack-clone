import React from 'react';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

import './Header.css'
import { useStateValue } from '../Reducer/stateProvider';

const Header = () => {
  const [{user}] = useStateValue();
  return (
    <div className="header">
        <div className="header__left">
          <Avatar
            className="header__avatar"
            alt={user?.displayName}
            src={user?.photoURL}
            style={{height: '2rem', width: '2rem'}}
          />
          <AccessTimeIcon />
        </div>
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Made with love by Bhavesh" />
        </div>
        <div className="header__right">
          <HelpOutlineIcon />
        </div>
    </div>
  )
}

export default Header;