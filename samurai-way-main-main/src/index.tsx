import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from "./redux/state";

ReactDOM.render(
    <App dialogs={state.dialogs} messageData={state.messageData} messages={state.messages} />,
  document.getElementById('root')
);