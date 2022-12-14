import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs, DialogsType, MessageType} from "./components/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from './components/Settings/Settings';
import {MessageDataType} from "./components/Profile/MyPosts/MyPosts";

export type AppPropsType = {
   messageData: MessageDataType[]
   dialogs: DialogsType[]
   messages: MessageType[]
   addPost: () => void
   newPostText: string
   updateNewPost: (newPostText: string) => void
}

function App(props: AppPropsType) {

   return (
      <div className='app-wrapper'>
         <Header/>
         <Navbar/>
         <div className='app-wrapper-content'>
            <Route path='/dialogs' render={() =>
               <Dialogs dialogs={props.dialogs}
                        messages={props.messages}/>}/>
            <Route path='/profile' render={() =>
               <Profile messageData={props.messageData}
                        addPost={props.addPost}
                        updateNewPost={props.updateNewPost}
                        newPostText={props.newPostText}/>}/>
            <Route path='/news' render={() => <News/>}/>
            <Route path='/music' render={() => <Music/>}/>
            <Route path='/settings' render={() => <Settings/>}/>
         </div>
      </div>
   );
}

export default App;
