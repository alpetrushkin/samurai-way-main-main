import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
   const messageData = [
      {id: 1, message: 'Hi, how are you?', likeCount: 12},
      {id: 2, message: "It's my first post", likeCount: 21},
      {id: 3, message: "It's post", likeCount: 121},
   ]

   const messageDataElements = messageData.map(md => <Post id={md.id} message={md.message} likeCount={md.likeCount}  />)

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

