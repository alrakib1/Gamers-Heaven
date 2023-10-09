import { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
  } from "firebase/auth";
import app from "../../services/firebase.config";


export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const auth = getAuth(app);

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
      };

    //   sign in user
    const singIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    // logout user
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    
      useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
          console.log("user in the auth state changed", currentUser);
          setUser(currentUser);
          setLoading(false);
        });
        return () => {
          unSubscribe();
        };
      }, [auth]);


















      const authInfo = {
        user,
        createUser,
        singIn,
        logOut,
        loading
      };
      return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
      );
    };
    
    export default AuthProvider;