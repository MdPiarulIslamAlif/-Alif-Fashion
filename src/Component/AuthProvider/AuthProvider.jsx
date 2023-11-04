import { createContext, useState } from "react";
import { signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

     const [user, setUser] = useState()
     const [loading, setLoading] = useState(true)



     //Register 
     const createUser = (email, password)=>{
          setLoading(true)
          return createUserWithEmailAndPassword(auth, email, password)

     }

     //login authentication
     const login = (email,password)=>{
          setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
     }

     const authInfo = {
       user,
       login,
       createUser,
     };
     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;