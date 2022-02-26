import { useState } from 'react';
import App from './components/App.js';
import Chatbox from './components/Chatbox.js';
import Userlist from './components/Userlist.js';
import Inputbox from './components/Inputbox.js';
import './Chat.css';

function Chat() {
  const [chatData, setChatData] = useState([
    {user: "user1", msg: "You love Hee?", position: "left"},
    {user: "user2", msg: "Yes I love hee", position: "right"},
    {user: "user1", msg: "Wow very good!", position: "left"},
    {user: "user2", msg: "Thanks!", position: "right"},
    
  ]);

  return (
    <App>
      <div className="chat">
        <Userlist/>
        <Chatbox data={chatData}/>
        <Inputbox/>
      </div>
    </App>
  );
}

export default Chat;
