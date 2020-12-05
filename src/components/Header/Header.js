import React, {useEffect, useState} from 'react';
import './Header.scss';

function Header(props) {
  return (
    <div className="Header">
      <div className="title">{props.title}</div>
      <div className="right">
      </div>
    </div>
  );
}

export default Header;
