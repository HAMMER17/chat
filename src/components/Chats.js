import React, { useEffect, useState } from 'react'
import { doc, onSnapshot } from "firebase/firestore";
import { db } from '../firebase'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';


const Chats = () => {
  const { currentUser } = useContext(AuthContext)
  const { dispatch } = useContext(ChatContext)

  const [chats, setChats] = useState([])

  useEffect(() => {
    const getChat = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), doc => {
        setChats(doc.data())
      })
      return () => {
        unsub()
      };
    }
    currentUser.uid && getChat()
  }, [currentUser.uid])

  const handleSelect = (u) => {
    dispatch({ type: 'CHANGE_USER', payload: u })
  }

  return (
    <div className="search">
      {Object.entries(chats)?.sort((a, b) => b[1].data - a[1].data).map(elem => {
        return <div className="userChat" key={elem[0]} onClick={() => handleSelect(elem[1].userInfo)}>
          <img src={elem[1].userInfo.photoURL} alt="1" />

          <div className="userInfo">

            <span>{elem[1].userInfo.displayName}</span>
          </div>
          <p>{elem[1].lastMessage?.text}</p>
        </div>
      })}

    </div>
  )
}

export default Chats
