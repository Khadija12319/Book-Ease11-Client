import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider} from "firebase/auth";

import PropTypes from 'prop-types';
import app from "../../../firebase.config";
import axios from "axios";
const auth = getAuth(app);

export const AuthContext = createContext([]);

const Context = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const Provider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const logInUser= (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth)
    }
    useEffect(()=> {
       const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            if(currentUser){
                const userEmail=currentUser.email || user?.email;
        const loggedUser = {email:userEmail};
                axios.post('https://bookeaseclient.vercel.app/jwt',loggedUser,{withCredentials:true})
                .then(res => console.log(res.data))
            }
            else{
                const userEmail=currentUser.email || user?.email;
        const loggedUser = {email:userEmail};
                axios.post('https://bookeaseclient.vercel.app/logout',loggedUser,{withCredentials:true})
                .then(res => console.log(res.data))
            }
        })
        return () =>{
            unSubscribe();
        }
    },[])

    const logInGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, Provider);
    }

    const logInGit = () =>{
        setLoading(true);
        return signInWithPopup(auth, gitProvider);
    }
   

    const authKey={user,loading,createUser,logOut,logInUser,logInGoogle, logInGit,auth};
    return (
        <AuthContext.Provider value={authKey}>
            {children}
        </AuthContext.Provider>
    );
};

Context.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]).isRequired
};
export default Context;