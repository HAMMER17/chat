import React from 'react'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { auth, storage, db } from '../firebase'
import Logo from '../images/foto.png'
import { Link, useNavigate } from 'react-router-dom';
// import { writeUserData } from './db';

const Register = () => {
  const [err, setErr] = React.useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0]

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)

      const storageRef = ref(storage, displayName);
      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            // writeUserData(displayName, password, email, downloadURL)
            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
          }
        });
      });
    } catch (err) {
      setErr(true);

    }
  };

  return (
    <div className='formContainer'>
      <div className="formWrapper">

        <form onSubmit={handleSubmit}>
          <h5 className='logo'>My Chat</h5>
          <h3 className='title'>REGISTER</h3>
          <input type="text" placeholder='name' />
          <input type="email" placeholder='email' />
          <input type="password" placeholder='password' />
          <input type="file"
            style={{ display: 'none' }} id='file'
          />
          <label htmlFor="file" >
            <img src={Logo} alt="1" style={{ width: 40 }} />
            <span>add an avatar</span>
          </label>
          <button>sing up</button>
          {err && <span style={{ color: 'red' }}>Something went wrong</span>}
          <p>You do have an account?<Link to={'/login'}>Login</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Register
