import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {MessageDataType} from "./components/Profile/MyPosts/MyPosts";
import {DialogsType, MessageType} from "./components/Dialogs/Dialogs";

const messageData: Array<MessageDataType> = [
   {id: 1, message: 'Hi, how are you?', likeCount: 12},
   {id: 2, message: "It's my first post", likeCount: 21},
   {id: 3, message: "It's post", likeCount: 121},
]

const dialogs: Array<DialogsType> = [
   {id: 1, name: 'Alex'},
   {id: 2, name: 'Denis'},
   {id: 3, name: 'Mark'},
   {id: 4, name: 'Olga'},
   {id: 5, name: 'Dimych'},
   {id: 6, name: 'Valera'},
]

const messages: Array<MessageType>= [
   {id: 1, message: 'Hi'},
   {id: 2, message: 'How is your it-kamasutra'},
   {id: 3, message: 'How is your it-kamasutra'},
   {id: 4, message: 'How is your it-kamasutra'},
   {id: 5, message: 'How is your it-kamasutra'},
   {id: 6, message: 'How is your it-kamasutra'},
]

ReactDOM.render(
    <App  messageData={messageData} dialogs={dialogs} messages={messages}/>,
  document.getElementById('root')
);