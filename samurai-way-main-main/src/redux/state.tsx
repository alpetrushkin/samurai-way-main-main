import {renderEntireTree} from "../render";

const state = {
   profilePage: {
      messageData: [
         {id: 1, message: 'Hi, how are you?', likeCount: 12},
         {id: 2, message: "It's my first post", likeCount: 21},
         {id: 3, message: "It's post", likeCount: 121},
      ]
   },
   dialogsPage: {
      dialogs: [
         {id: 1, name: 'Alex'},
         {id: 2, name: 'Denis'},
         {id: 3, name: 'Mark'},
         {id: 4, name: 'Olga'},
         {id: 5, name: 'Dimych'},
         {id: 6, name: 'Valera'},
      ],
      messages: [
         {id: 1, message: 'Hi'},
         {id: 2, message: 'How is your it-kamasutra'},
         {id: 3, message: 'How is your it-kamasutra'},
         {id: 4, message: 'How is your it-kamasutra'},
         {id: 5, message: 'How is your it-kamasutra'},
         {id: 6, message: 'How is your it-kamasutra'},
      ],
   },
}

export type StateType = {
   ProfilePage: ProfilePageType
   DialogsPage: DialogsPageType
}
type ProfilePageType = {
   messageData: MessageDataType[]
}

export type MessageDataType = {
   id: number
   message: string
   likeCount: number
}

type DialogsPageType = {
   dialogs: DialogsDataType[]
   messages: MessagesPropsType[]
}
type DialogsDataType = {
   id: number
   name: string
}
type MessagesPropsType = {
   id: number
   message: string
}

export let addPost = (text: string) => {
   let newPost = {
      id: 4,
      message: text,
      likeCount: 20
   };
   state.profilePage.messageData.push(newPost);
   renderEntireTree(state)
}

export default state;