import React from 'react';
import classes from './profile.module.scss'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsProps} from "../../interfaces/postsProps";



const Profile = ({postsData}: PostsProps) => {

    return (
    <div>
        <ProfileInfo/>
        <MyPosts postsData = {postsData} />
    </div>
    );
};

export default Profile;