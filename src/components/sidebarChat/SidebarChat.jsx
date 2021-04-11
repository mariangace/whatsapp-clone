import React, {useState, useEffect} from "react";
import { Avatar } from "@material-ui/core";
import db from '../../firebase';
import { Link } from "react-router-dom";
import "./sidebarChat.style.css";

const SidebarChat = ({ addNewChat, id, name }) => {
  const [seed, setSeed] = useState(0);

  const createChat = () => {
   const roomName =  prompt('Please enter name of the room');

   if(roomName){
     //save it with the database
     db.collection('rooms').add({
       name:roomName
     })
   }
  }

  useEffect(() => {
   setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>Last Message Hello</p>
        </div>
      </div>
    </Link>
  ):
  (
    <div className="sidebarChat" onClick={createChat}>
      <h2>Add New Chat</h2>
    </div>
  );
};

export default SidebarChat;
