import { doc, onSnapshot } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { ChatContext } from '../context/ChatContext'
import { db } from '../firebase'
import Message from './Message'

const Messages = () => {
  const { data } = useContext(ChatContext)
  const [message, setMessage] = useState([])
  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessage(doc.data().messages)//messages !!!
    })
    return () => {
      unSub()
    }
  }, [data.chatId])
  console.log(message)
  return (
    <div className='messages'>
      {message.map(m => {
        return <Message message={m} key={m.id} />
      })}

    </div>
  )
}

export default Messages
