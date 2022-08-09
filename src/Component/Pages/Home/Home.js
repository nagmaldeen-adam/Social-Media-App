import React from 'react';
import Side from '../Sidebar/Side';
import Feed from '../Feed/Feed.js';
import Right from '../Rightbar/Right.js';
import './Home.css';
import Topbar from '../Topbar/Topbar.js';
const Home = () => {
    return (
           <>
           <Topbar />
           <div className="home-container">
               <Side />
               <Feed />
               <Right />
           </div>  
           </>
    )
}
export default Home;