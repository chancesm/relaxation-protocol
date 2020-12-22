import React, {useEffect, useState} from 'react';
import './Header.scss';

function Header(props) {
  return (
    <div className="Header">
      <div className="title">{props.title}</div>
      <div className="right">
        <select value={props.selectedPhase} onChange={(e) => props.handler(e.target.value)}>
          {props.options.map((o, i) => <option key={o.id} value={o.fields.Name}>{o.fields.Name}</option>)}
        </select>
      </div>
    </div>
  );
}

export default Header;
