import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";

import auth from "../auth/firebase.config"
import { AuthContext } from "../context/AuthContext";

const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);

    const [userLoading, setUserLoading] = useState(true);



    const registerUser = (email, password) => {
        setUserLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setUserLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }


    const googleLogin = () => {
        return signInWithPopup(auth, provider)

    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, async currentUser => {
            if (currentUser) {
                const token = await currentUser.getIdToken();
                setUser({ ...currentUser, accessToken: token });
            } else {
                setUser(null);
            }
            setUserLoading(false);
        });
        return () => unSubscribe();
    }, []);



    const logOut = () => {
        setUserLoading(true);
        return signOut(auth)
    };




    



    const userInformation = {
        registerUser,
        loginUser,
        googleLogin,
        user,
        setUser,
        logOut,
        userLoading,
        setUserLoading
    }

    return (
        <AuthContext.Provider value={userInformation}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;