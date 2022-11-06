import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export type MyPostsPropsType = {
   messageData: MessageDataType[]
}
export type MessageDataType = {
   id: number
   message: string
   likeCount: number
}

export const MyPosts = (props: MyPostsPropsType) => {
   const messageDataElements = props.messageData.map(md => <Post id={md.id} message={md.message} likeCount={md.likeCount}  />)

   return (
      <div className={s.postsBlock}>
         <h3>My posts</h3>
         <div>
            <div>
               <textarea></textarea>
            </div>
            <div>
               <button>Add post</button>
            </div>
         </div>
         <div className={s.posts}>
            {messageDataElements}
         </div>
      </div>
   )
};

