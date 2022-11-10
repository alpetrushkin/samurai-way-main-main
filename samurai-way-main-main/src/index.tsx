import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import state, {addPost, subscribe, updateNewPost} from "./redux/state";

export let renderEntireTree = (state: any) => {
   ReactDOM.render(
      <BrowserRouter>
         <App addPost={addPost}
              updateNewPost={updateNewPost}
              dialogs={state.dialogsPage.dialogs}
              messageData={state.profilePage.messageData}
              messages={state.dialogsPage.messages}
              newPostText={state.profilePage.newPostText}
         />
      </BrowserRouter>,
      document.getElementById('root')
   );
}


renderEntireTree(state);
subscribe(renderEntireTree)