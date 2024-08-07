import React, { useState , useContext } from 'react';
import { createContext } from 'react'; 
import './side-bar.css';


function List() {
  const [open, setOpen] = useState(false);

  const move = () => {
    setOpen(!open);
  };

  return (
    
    <div className={`List ${open ? 'open' : 'close'}`}>
      <button className="btn" onClick={move}>
        Menu
      </button>
      <div className="li-item">
        <ul>
          <li>Existing Inventory</li>
          <li>Used Inventory</li>
          <li>Trade-In</li>
          <li>Test Drive</li>
          <li>Powerwall</li>
          <li>Commercial_Energy</li>
          <li>Utilities</li>
          <li>Charging</li>
          <li>Find Us</li>
          <li>Support</li>
          <li>Investor Relations</li>
          <li>Shop</li>
          <li>Account</li>
        </ul>
      </div>
    </div>
  );
}

export default List;
