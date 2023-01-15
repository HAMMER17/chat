
import React, { useContext, useRef, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'

const Message = ({ message }) => {
  const { data } = useContext(ChatContext)
  const { currentUser } = useContext(AuthContext)

  const ref = useRef()
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div ref={ref} className={`message ${message.senderId === currentUser.uid && 'owher'}`}>
      <div className="messageInfo">
        <img src={message.senderId === currentUser.uid ? currentUser.photoURL : data.user.photoURL} alt="v" />
        <span style={{ color: 'green', marginBottom: 10 }}>
          {message.senderId === currentUser.uid ? currentUser.displayName : data.user.displayName}
        </span>
      </div>
      <div className="messageContext">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="a" />}

      </div>
    </div>
  )
}

export default Message
