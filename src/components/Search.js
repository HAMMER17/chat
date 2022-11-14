import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { collection, query, where, getDocs, setDoc, doc, updateDoc, serverTimestamp, getDoc } from "firebase/firestore";
import { db } from '../firebase'

const Search = () => {
  const { currentUser } = useContext(AuthContext)
  const [username, setUsername] = useState('')
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)

  const handleSearch = async () => {
    const q = query(collection(db, "users"), where("displayName", "==", username));
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      });

    } catch (err) {
      setErr(true)
    }
  };
  const handleKey = (e) => {
    e.code === 'Enter' && handleSearch()

  }
  const handleSelect = async () => {
    const comdinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid

    try {
      const res = await getDoc(doc(db, "chats", comdinedId))
      if (!res.exists()) {
        await setDoc(doc(db, "chats", comdinedId), { messages: [] })
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [comdinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [comdinedId + ".data"]: serverTimestamp()
        });
        await updateDoc(doc(db, "userChats", user.uid), {
          [comdinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [comdinedId + ".data"]: serverTimestamp()
        })
      }
    } catch (err) {
      setErr(true)
      setUser(null)
      setUsername('')
    }
  }
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='search...'
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)} value={username} />
      </div>
      {err && <span>User not found</span>}
      {user && <div className="userChat" onClick={handleSelect}>
        <img src={user.photoURL} alt="q" />

        <div className="userInfo">
          <span>{user.displayName}</span>
        </div>

      </div>}
    </div>
  )
}
export default Search
