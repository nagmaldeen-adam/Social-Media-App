import React from 'react';
import './online.css';
function Online ({user}) {
    return (
        <li className='right-friend'>
        <div className='right-profile-img'>
            <img src={user.image} alt="loading Error" className="profile-img" />
            <span className="right-online"></span>
        </div>
        <span className="right-username">{user.username}</span>
       </li>
    )
}
export default Online;