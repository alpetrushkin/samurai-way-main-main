import React from 'react';
import s from './Profile.module.css'
import {MessageDataType, MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
   messageData: MessageDataType[]
   addPost: () => void
   newPostText: string
   updateNewPost: (newPostText: string) => void
}

export const Profile = (props: ProfilePropsType) => {

   return (
      <div className={s.content}>
         <ProfileInfo />
         <MyPosts messageData={props.messageData}
                  updateNewPost={props.updateNewPost}
                  addPost={props.addPost}
                  newPostText={props.newPostText}
         />
      </div>
   );
};

