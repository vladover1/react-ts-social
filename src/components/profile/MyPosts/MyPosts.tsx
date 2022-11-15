import React from 'react';
import classes from './MyPosts.module.scss'
import Post from "./Post/Post";
import {PostsProps} from "../../../interfaces/postsProps";




const MyPosts = ({postsData}: PostsProps) => {

    let postElements = postsData.map( post => <Post message={post.message} likesCount={post.likesCount}/>)

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    );
};

export default MyPosts;