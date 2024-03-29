import React, { useContext } from 'react'
import { ChatContext } from '../context/ChatContext'
import Input from './Input'
import Messages from './Messages'

const Chat = () => {
  const { data } = useContext(ChatContext)
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        {data.user?.photoURL && <img style={{ width: 40, marginRight: 250, height: 40, borderRadius: '50%' }} src={data.user?.photoURL} alt='3' />}

        <div className="chatIcon">
          <i className="bi bi-camera-reels-fill"></i>
          <i className="bi bi-people-fill"></i>
          <i className="bi bi-list"></i>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat
