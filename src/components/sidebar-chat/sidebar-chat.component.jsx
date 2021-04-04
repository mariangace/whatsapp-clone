import React, {useState, useEffect} from "react";
import { Avatar } from "@material-ui/core";
import "./sidebar-chat.style.css";

const SidebarChat = ({ addNewChat }) => {
  const [seed, setSeed] = useState("");

  const createChat = () => {
   const roomName =  prompt('Please enter name of the room');

   if(roomName){
     //save it with the database
   }

  }

  useEffect(() => {
   setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
      <div className="sidebarChat__info">
        <h2>Room name</h2>
        <p>Last Message Hello</p>
      </div>
    </div>
  ):
  (
    <div className="sidebarChat" onClick={createChat}>
      <h2>Add New Chat</h2>
    </div>
  );
};

export default SidebarChat;
