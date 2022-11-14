import React, { useContext } from 'react'
import { useState } from 'react'
import { doc, updateDoc, arrayUnion, Timestamp, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { storage } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'
import Foto from '../images/foto.png'
import { db } from '../firebase';
import { v4 as uuidv4 } from 'uuid';


const Input = () => {
  const { data } = useContext(ChatContext)
  const { currentUser } = useContext(AuthContext)
  const [text, setText] = useState('')
  const [img, setImg] = useState(null)

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuidv4())
      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          console.log(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuidv4(),
                text,
                senderId: currentUser.uid,
                data: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      )
    } else
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuidv4(),
          text,
          senderId: currentUser.uid,
          data: Timestamp.now()
        })
      })
    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".data"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".data"]: serverTimestamp(),
    });

    setText("");
    setImg(null);
  };
  return (
    <div className='input'>
      <input type="text" placeholder='text....'
        onChange={(e) => setText(e.target.value)} value={text} />
      <div className="send">
        <input type="file" name="" id="file" onChange={(e) => setImg(e.target.files[0])}
          style={{ display: 'none' }} placeholder='text...' />
        <label htmlFor="file">
          <img src={Foto} alt="1" className='foto' />
        </label>
        <i className="bi bi-envelope-paper-fill"></i>
        <i className="bi bi-paperclip"></i>
        <button onClick={handleSend}>send</button>
      </div>
    </div>
  )
}

export default Input
