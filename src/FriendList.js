import { useState } from 'react';
import './FriendList.css';
import App from './components/App';
import Avatar from './components/Avatar';
import Friend from './components/Friend';

function FriendList(){
  const [friends, setFriends] = useState([
    {user: "user1", displayName: "ไอ้ปื้ด"},
    {user: "user2", displayName: "นางสาวสุดา"},
    {user: "user3", displayName: "พลทหารหนึ่ง"},
    {user: "user4", displayName: "ศาตราจารย์นายกรัฐมนตรีดอกเตอร์เขียว"},
  ]);

  return(
    <App>
      <div>
          <Friend data = {friends}/>
      </div>
    </App>
  )
}

export default FriendList;