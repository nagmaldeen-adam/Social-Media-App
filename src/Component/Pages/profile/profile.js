import React from 'react';
import i  from '../Img/7.jpeg';
import i1 from '../Img/one.jpeg'
import Side from '../sidebar/Side.js';
import Feed from '../Feed/Feed.js';
import Right from '../Rightbar/Right.js';
import './profile.css';
import Topbar from '../Topbar/Topbar.js';
function Profile () {
    return(
        <>
        <Topbar />
        <div className="profile">
        <Side />
        <div className="profileRigth">
            <div className="profileRigthTop">
              <div className="cover">
            <img className="coverImg" src={i1} />  
            <img className="userImg" src={i} />
             </div> 
             <div className="profileInfo">
                <h4 className="infoName">My Name</h4>
                <span className="infoDesc">My Description</span>
                </div>                   
             </div>
            <div className="profileRigthBottom">
            <Feed />
            <Right profile/>
            </div>
        </div>
        </div>   
    </>
    )
}

export default Profile;