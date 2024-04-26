import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // current user state
  const [currentUser , setCurrentUser ] = useState(null);

  // loading state
  const [loading, setLoading] = useState(true);

  // create user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  // observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
    });

    return () => {
      unSubscribe();
    }
  },[]);

  // auth context value
  const authInfo = {
    currentUser,
    loading,
    setLoading,
    createUser,
    loginUser
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node
};

export default AuthProvider;