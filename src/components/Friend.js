import Avatar from "./Avatar";
import "../FriendList.css";

function FriendL (props) {
  let data = props.data;

  return (
    <div>
      {
        data.map((item,index) => 
        {
          return (
            <div className="friend-list-item">
                <Avatar name={item.user}/>
                {item.displayName} 
            </div>)
        })
      }
    </div>
  )
}

export default FriendL;