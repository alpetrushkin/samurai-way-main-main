import React from 'react';
import s from './Profile.module.css'
import {MessageDataType, MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
   messageData: MessageDataType[]
   addPost: (text: string) => void
}

export const Profile = (props: ProfilePropsType) => {

   return (
      <div className={s.content}>
         <ProfileInfo />
         <MyPosts messageData={props.messageData} addPost={props.addPost}/>
      </div>
   );
};

