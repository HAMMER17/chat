import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useState, createContext, useEffect } from "react";


export const AuthContext = createContext()

export const AuthContextProvaider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({})
  useEffect(() => {
    const unsab = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      // console.log(user)
    });
    return (() => unsab())
  }, [])
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
};