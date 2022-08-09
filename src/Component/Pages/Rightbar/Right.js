import React from 'react';
import img from '../Img/tow.jpeg';
import image from '../Img/one.jpeg';
import img2 from '../Img/three.jpeg';
import img3 from '../Img/7.jpeg';
import img4 from '../Img/L7.jpeg';
import img5 from '../Img/Logo3.png';
import Online from '../online/online.js'
import { User} from '../../../Data/DummyData.js';
import './Right.css';   
const Right = ({profile}) => {
    const HomeRigth = () =>{
        return(
            <>
            <div className="birthday-container">
                <img src={img} alt="loading Error" className="birthday-img" />
                <span className="birthday-text">
                <b>pola foster</b> and <b>3 other friends</b> have a birthday today
                </span>
                </div>
                <img src={img2} alt="Loading Error" className="right-add" />
                <h4 className="right-title"> online friends</h4>
                <ul className="right-friend-list">
                 {User.map((u)=>(
                 <Online key={u.id} user={u}/>
                 ))}
               </ul>
            </>
        )
    };
    const ProfileRigth = () =>{
        return(
            <>
            <h4 className="rightTitle"> user information</h4>
            <div className="rightInfo">
                <div className="rightInfoItem">
                    <span className="rightInfoKey" >city:</span>
                    <span className="rightInfoValue"> sudan</span>
                </div>
                <div className="rightInfoItem">
                    <span className="rightInfoKey" >from:</span>
                    <span className="rightInfoValue"> algazerra</span>
                </div>
                <div className="rightInfoItem">
                    <span className="rightInfoKey" >relationship:</span>
                    <span className="rightInfoValue"> Single</span>
                </div>
            </div>
            <h4 className="rightTitle"> user frends</h4>
            <div className="followings" >
                <div className="following">
                    <img className="followingImg" src={image} alt="Loading Error" />
                    <span className="rightfollowingName">nagm</span>
                </div>
                <div className="following">
                    <img className="followingImg" src={img} alt="Loading Error" />
                    <span className="rightfollowingName">nagm</span>
                </div>
                <div className="following">
                    <img className="followingImg" src={img3} alt="Loading Error" />
                    <span className="rightfollowingName">nagm</span>
                </div>
                <div className="following">
                    <img className="followingImg" src={img4} alt="Loading Error" />
                    <span className="rightfollowingName">nagm</span>
                </div>
                <div className="following">
                    <img className="followingImg" src={img5} alt="Loading Error" />
                    <span className="rightfollowingName">nagm</span>
                </div>
                <div className="following">
                    <img className="followingImg" src={image} alt="Loading Error" />
                    <span className="rightfollowingName">nagm</span>
                </div>
            </div>


            </>
        )
    }
    return (
        <div className="Right">
            <div className="right-wrapper">
            {profile ?<ProfileRigth/> : <HomeRigth />}
            </div>
        </div>
    )
}
export default Right;