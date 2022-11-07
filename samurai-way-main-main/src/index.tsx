import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from "./redux/state";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
   <BrowserRouter>
      <App dialogs={state.dialogsPage.dialogs} messageData={state.profilePage.messageData}
           messages={state.dialogsPage.messages} />
   </BrowserRouter>,
  document.getElementById('root')
);