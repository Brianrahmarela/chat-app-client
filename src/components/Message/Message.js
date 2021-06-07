import React from 'react';
import './Message.css';
import ReactEmoji from 'react-emoji';

const Message = ({message: {user, text}, name}) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName){
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
    ? (
      <div className="messageContainer justifyEnd">
        <p className="sentText tw-pr-2 tw-text-gray">{trimmedName}</p>
        <div className="messageBox tw-bg-base tw-my-1">
          <p className="messageText tw-text-white">{ReactEmoji.emojify(text)}</p>
        </div>
      </div>
    )
    : (
      <div className="messageContainer justifyStart">
        <div className="messageBox tw-bg-accent tw-mt-1">
          <p className="messageText tw-text-accent">{ReactEmoji.emojify(text)}</p>
        </div>
        <p className="sentText tw-pl-2 tw-text-gray">{user}</p>
      </div>
    )
  )
}

export default Message