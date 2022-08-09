import { CodeSharp, MoreVert } from '@material-ui/icons';
import { User} from '../../../Data/DummyData.js';
import React from 'react';
import Like from '../Img/like.jpeg';
import Hurt from '../Img/hurt.png';
import {useState}from 'react';
import './Post.css';
function Post({ post}) {
    const [like,setLike] = useState(post.like);
    const [isLike,setIsLike] = useState(false);
    const IncreaseLike = () =>{
        setLike(isLike ? like - 1 : like + 1);
        setIsLike(!isLike);
    };

    return (
        <div className="post">
            <div className="post-wrapper">
                <div className="post-top">
                    <div className='post-top-left'>
                        <img src={User.filter((u) =>u.id === post.userId)[0].image}alt="Loading Error " className="post-profile-img" />
                        <span className="post-user-name">
                            {User.filter((u) =>u.id === post.userId)[0].username}
                    </span>
                        <span className="post-data">{post.data}</span>
                    </div>
                    <div className="post-top-right">
                     <MoreVert />
                    </div>
                </div>
                <div className="post-center">
                    <span className="post-text">{post?.desc}</span>
                    <img src={post.photo} alt="Loading Error" className="post-img" />
                </div>
                <div className="post-bottom">
                    <div className="post-bottom-left">
                        <img className="like-icon" src={Like} alt="loading Error" onClick={IncreaseLike} />
                        <img className="like-icon" src={Hurt} alt="loading Error"onClick={IncreaseLike} />
                        <span className="post-like-counter">{like}</span>
                    </div>
                    <div className='post-bottom-right'>
                        <span className="post-comment-text" >{post.comment}</span>
                    </div>
                </div>
         </div>
        </div>
    )
}
export default Post;