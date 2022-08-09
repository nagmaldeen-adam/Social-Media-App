import { EmojiEmotions, Label, PermMedia, Room } from '@material-ui/icons';
import './Share.css';
import Img from '../Img/one.jpeg';
import React from 'react';
const Share = () => {
    return (
        <div className='share'>
            <div className='share-wrapper'>
            <div className="share-top">
                <img src={ Img} alt="Error loading" className="share-profile-img" />
                <input placeholder="what is in your mind"  
                className="share-input" />
            </div>
            <hr className='share-hr' />
            <div className='share-bottom'>
                <div className='share-options'>
                    <div className="share-option">
                        <PermMedia htmlColor="tomato" className="share-icon"/>
                        <span   className="share-option-text">photo or video</span>
                        </div>
                         <div   className="share-option">
                        <Label htmlColor="blue" className="share-icon" />
                        <span  className="share-option-text" > tag</span>
                        </div>
                         <div className="share-option">
                        <Room htmlColor="green" className="share-icon" />
                        <span   className="share-option-text" >location</span>
                        </div>
                         <div className="share-option">
                        <EmojiEmotions htmlColor="goldenrod" className="share-icon"/>
                        <span className="share-option-text" >feelings</span>
                    </div>
                    </div>
                    <button className="share-button">share</button>
            </div>
            </div>
         </div>
    )
}
export default Share;