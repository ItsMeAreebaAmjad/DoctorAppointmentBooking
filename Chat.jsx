import React from 'react';
import Nav from './Chat/nav/Nav';
import ChatBody from './Chat/chatBody/ChatBody';

const Chat = () => {
  return (
    <div className="__main">
      <Nav />
      <ChatBody />
    </div>
  );
}

export default Chat;