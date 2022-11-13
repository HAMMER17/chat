import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase'

const Login = () => {
  const [err, setErr] = React.useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const email = e.target[0].value
    const password = e.target[1].value

    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/')
    } catch (err) {
      setErr(true)
    }
  }
  return (
    <div className='formContainer'>
      <div className="formWrapper">

        <form onSubmit={handleSubmit}>
          <h5 className='logo'>My Chat</h5>
          <h3 className='title'>LOGIN</h3>

          <input type="email" placeholder='email' />
          <input type="password" placeholder='password' />

          <button>sing in</button>
          {err && <span style={{ color: 'red' }}>Something went wrong</span>}
          <p>You don not have an account? <Link to={'/register'}>Register</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login
