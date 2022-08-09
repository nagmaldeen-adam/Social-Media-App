import React from 'react';
import './close.css';
function Close ({close}){
    return(
        <li className="side-friend">
        <img src={close.image} alt="Error Loading"  className='side-friend-image'/>
       <span className="side-friend-name">{close.username}</span>
       </li>
     )
}

export default Close;