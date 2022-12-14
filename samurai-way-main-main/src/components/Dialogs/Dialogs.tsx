import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";

type DialogsPropsType = {
   dialogs: DialogsType[]
   messages: MessageType[]
}
export type DialogsType = {
   id: number
   name: string
}
export type MessageType = {
   id: number
   message: string
}

export const Dialogs = (props: DialogsPropsType) => {

   const dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

   const messagesElements = props.messages.map(m => <Message id={m.id} message={m.message} />)

   let newMessage: any = React.createRef()
   let addMessage = () => {
      let messages = newMessage.current.value
      alert(messages)
   }

   return (
      <div className={s.dialogs}>
         <div className={s.dialogItems}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            {messagesElements}
         </div>
         <div>
            <textarea ref={newMessage}></textarea>
         </div>
         <div>
            <button onClick={addMessage}>Add message</button>
         </div>
      </div>
   )
}