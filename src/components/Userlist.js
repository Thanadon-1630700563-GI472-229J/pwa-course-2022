import { useState } from 'react';
import '../css/Userlist.css';

function Userlist () {
  const [trayStatus, setTrayStatus] = useState("open");
  const [buttonStatus, setButtomStatus] = useState("x")

  function onButtonClicked() {
      if(trayStatus === "open"){
        setTrayStatus("closed");
        setButtomStatus("o")
      } if(trayStatus === "closed"){
        setTrayStatus("open");
        setButtomStatus("x")
      }
  }

  return (
    <div className={"userlist "+trayStatus}>
      <div className="close-button" onClick={onButtonClicked}>{buttonStatus}</div>
    </div>
  )
}

export default Userlist;