import React from 'react';
import s from './Post.module.css'

type PostType = {
   message: string,
   likeCount: number
   id: number
}

export const Post = (props: PostType) => {
   return (
      <div className={s.dialog}>
         <img src="https://gamebomb.ru/files/galleries/001/3/32/351570.jpg" alt=""/>
         {props.message}
         <div>
            <span>like {props.likeCount}</span>
         </div>
      </div>
   )
};

