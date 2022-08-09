import React from 'react';
import './Topbar.css';
import  Img  from '../Img/Logo3.png';
import { Person, Chat, Notifications, Search } from '@material-ui/icons';
const Topbar = () => {
    return (
        <div className="topbar-container">
            <div className='topbar-left'>
                <span className="logo">nagmsocial</span>
            </div>
            <div className="topbar-center">
                <div className="search-bar">
                    <Search className="search-icon"/>
                    <input
                        placeholder="search for friend ,post or vedio"
                    className="search-input"  />
                </div>
            </div>
            <div className="topbar-right">
                <div className="topbar-links">
                    <span className="topbar-link">homepage</span>
                    <span className="topbar-link">timeline</span>
                </div>
                <div className="topbar-icons">
                    <div className="topbar-iconsItem">
                        <Person />
                        <span className='topbar-iconBadge'>1</span>
                    </div>
                     <div className="topbar-iconsItem">
                        <Chat />
                        <span className='topbar-iconBadge'>2</span>
                    </div>
                     <div className="topbar-iconsItem">
                        <Notifications />
                        <span className='topbar-iconBadge'>1</span>
                    </div>
                </div>
                <img src={Img} alt="Error Loading" className="topbar-img" />
            </div>
        </div>
    )
}
export default Topbar;