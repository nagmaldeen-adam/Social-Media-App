import React from 'react';
import Share from '../Share/Share.js';
import Post from '../Post/Post.js';
import { posts} from '../../../Data/DummyData.js';
import './Feed.css';
const Feed = () => {
    
    return (
        <div className="Feed">
            <div className="feedwrapper">
                <Share />
                {posts.map((p) =>(
                    < Post key={p.id} post={p}  />
                    ))}
            </div>
        </div>
    )
}
export default Feed;