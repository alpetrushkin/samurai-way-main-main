import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";

export const Dialogs = () => {
   const dialogs = [
      {id: 1, name: 'Alex'},
      {id: 2, name: 'Denis'},
      {id: 3, name: 'Mark'},
      {id: 4, name: 'Olga'},
      {id: 5, name: 'Dimych'},
      {id: 6, name: 'Valera'},
   ]

   const messages = [
      {id: 1, message: 'Hi'},
      {id: 2, message: 'How is your it-kamasutra'},
      {id: 3, message: 'How is your it-kamasutra'},
      {id: 4, message: 'How is your it-kamasutra'},
      {id: 5, message: 'How is your it-kamasutra'},
      {id: 6, message: 'How is your it-kamasutra'},
   ]

   const dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

   const messagesElements = messages.map(m => <Message id={m.id} message={m.message} />)

   return (
      <div className={s.dialogs}>
         <div className={s.dialogItems}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            {messagesElements}
         </div>
      </div>
   )
}