import React from 'react';
import s from './ProfileInfo.module.css'


export const ProfileInfo = () => {
   return (
      <div>
         <div>
            <img src="https://klike.net/uploads/posts/2019-11/1572608842_3.jpg" alt=""/>
         </div>
         <div className={s.descriptionBlock}>
            ava + description
         </div>
      </div>

   );
};

