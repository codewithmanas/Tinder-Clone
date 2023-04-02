import React from 'react';
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
  return (
    <div className="header">
        <div className="header__container container">
        <IconButton>
          <PersonIcon fontSize="large" className="header__icon"/>
        </IconButton>

        <img className="header__logo" src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png" alt="header logo" />

        <IconButton>
            <ForumIcon fontSize="large" className="header__icon" />
        </IconButton>
          
        </div>
    </div>
  );
}

export default Header;