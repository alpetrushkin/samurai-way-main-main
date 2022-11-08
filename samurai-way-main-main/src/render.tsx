import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost} from "./redux/state";

export let renderEntireTree = (state: any) => {
   ReactDOM.render(
      <BrowserRouter>
         <App addPost={addPost} dialogs={state.dialogsPage.dialogs} messageData={state.profilePage.messageData}
              messages={state.dialogsPage.messages}  />
      </BrowserRouter>,
      document.getElementById('root')
   );
}

