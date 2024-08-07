import React, { useState } from 'react';
import './menu.css';
import List from '../sideBar/List';
import { Link } from 'react-router-dom';

function Menu() {


    return (
        <div className="menu-right">
            <ul>
                <li><a className="link" href="#">Shop</a></li>
                <li><a className="link" href="/Sign">Account
                    <Link to={'/Sign'} />
                </a>
                    
                </li>
                <List />
            </ul>
        </div>
    );
}

export default Menu;
