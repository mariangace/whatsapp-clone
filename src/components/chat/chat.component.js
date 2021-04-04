import React from 'react';
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined, AttachFile, MoreVert } from '@material-ui/icons';
import './chat.component.css';

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar /> 
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p> Last seen at ...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert/>
          </IconButton>
        </div>
      </div>
      <div className="chat__body">

      </div>
      <div className="chat__footer">
        Hello Chat footer
      </div>
    </div>
  )
}

export default Chat