import React from 'react';
import './Header.scss';

function Header(props) {
  return (
    <div className="Header">
      <div className="title">{props.title}</div>
      <div className="right">
        {props.options.length > 0 ? (<select value={props.selectedPhase} onChange={(e) => props.handler(e.target.value)}>
          {props.options.map((o, i) => <option key={o.id} value={o.fields.Name}>{o.fields.Name}</option>)}
        </select>) : null }
      </div>
    </div>
  );
}

export default Header;
