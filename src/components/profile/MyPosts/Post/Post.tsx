import React from 'react';
import classes from './Post.module.scss'

interface PostProps{
    message: string;
    likesCount: number
}

 const Post = ({message, likesCount}: PostProps) => {

    return (
        <div className={classes.item}>
            <img
                src='https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8='
                alt='avatar'/>
            {message}
            <div>
                <span>Like {likesCount}</span>
            </div>
        </div>
    );
};

export default Post;