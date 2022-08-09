import {
    Bookmark, Chat, Group, HelpOutline,
    PlayCircleFilledOutlined, RssFeed, School,
    WorkOutline , Event
} from '@material-ui/icons';
import React from 'react';
import Close from '../close/close';
import {User} from '../../../Data/DummyData';
import './side.css';
const  Side  = () => {
    return (
        <div className='side'>
            <div className='side-wrapper'>
                <ul className="side-list">
                    <li className="side-list-item">
                        <RssFeed className="side-icons" />
                        <span className="side-list-item-text">
                         Feed
                        </span>
                    </li>
                    <li className="side-list-item">
                        <Chat className="side-icons" />
                        <span className="side-list-item-text">
                         chats
                        </span>
                    </li>
                    <li className="side-list-item">
                        <PlayCircleFilledOutlined className="side-icons" />
                        <span className="side-list-item-text">
                         videos
                        </span>
                    </li>
                    <li className="side-list-item">
                        <Group className="side-icons" />
                        <span className="side-list-item-text">
                         groups
                        </span>
                    </li>
                    <li className="side-list-item">
                        <Bookmark className="side-icons" />
                        <span className="side-list-item-text">
                         bookmark
                        </span>
                    </li>
                    <li className="side-list-item">
                        <HelpOutline className="side-icons" />
                        <span className="side-list-item-text">
                         questions
                        </span>
                    </li>
                    <li className="side-list-item">
                        <WorkOutline className="side-icons" />
                        <span className="side-list-item-text">
                         job
                        </span>
                    </li>
                    <li className="side-list-item">
                        <Event className="side-icons" />
                        <span className="side-list-item-text">
                         events
                        </span>
                    </li>
                    <li className="side-list-item">
                        <School className="side-icons" />
                        <span className="side-list-item-text">
                         courses
                        </span>
                    </li>
                </ul>
                <button className='side-button'> show more</button>
                <hr className="side-hr" />
                <ul className='side-friend-list'>
                    {User.map((u) =>(
                        <Close key={u.id} close={u} />
                    ))} 
                </ul>
            </div>
        </div>
    )
}
export default Side;