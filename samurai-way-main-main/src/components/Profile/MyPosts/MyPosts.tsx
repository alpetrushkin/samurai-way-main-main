import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export type MyPostsPropsType = {
   messageData: MessageDataType[]
   addPost: (text: string) => void
}
export type MessageDataType = {
   id: number
   message: string
   likeCount: number
}

export const MyPosts = (props: MyPostsPropsType) => {
   const messageDataElements = props.messageData.map(md => <Post id={md.id} message={md.message} likeCount={md.likeCount}  />)

   let newPostElement: any = React.createRef<HTMLTextAreaElement>();

   let addPost = () => {
      let text= newPostElement.current.value;
      props.addPost(text);
      newPostElement.current.value = ''
   }

   return (
      <div className={s.postsBlock}>
         <h3>My posts</h3>
         <div>
            <div>
               <textarea ref={newPostElement}></textarea>
            </div>
            <div>
               <button onClick={addPost}>Add post</button>
            </div>
         </div>
         <div className={s.posts}>
            {messageDataElements}
         </div>
      </div>
   )
};

