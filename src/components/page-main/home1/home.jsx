import Header from '../header/Header';
import List from '../sideBar/List';
import './home.css';
import Item from './item';
import { useState } from 'react';




function Home( {imageUrl, title,  line1, line2, move}) {

   


    return (
        <div className="Home">
            <img src={imageUrl}  className="App-backgroundimg" /> 
            <Header />
            <Item title={title} />
            <div className='item-btn'>
                <button className='but-blc'>{line1}</button>
                {line2 && (
                    <button className='but-wh'>{line2}</button>
                )}   
                        {/* <button className="but-whs">
                          salam
                         </button> */}
                
                  </div>
        </div>
        
    );
}

export default Home;
