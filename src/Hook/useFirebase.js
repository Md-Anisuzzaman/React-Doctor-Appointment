import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import intializeFirebaseApp from '../Firebase/Firebase-init';


intializeFirebaseApp();

const useFirebase = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(false);



    const handleGooglesignin = () => {
        return signInWithPopup(auth, provider);

        //signInWithPopup(auth, provider)
        // .then((result) => {
        //     setUser(result.user);
        // });


    }

    const toggleLogin = e => {
        setIsLogin(e.target.value);

    }

    const handleEmailChange = e => {
        setEmail(e.target.value);

    }
    const handlePasswordlChange = e => {
        setPassword(e.target.value);

    }

    const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password Should be 6 characters long');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(user);
                setError("");
                console.log(user);
            })
        console.log(email, password);
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setError("");
            }
        });

    }, [user]);



    const logOut = () => {
        signOut(auth)
            .then(() => setUser({}))
            .catch(() => setError(error.message));
        sessionStorage.removeItem("email");
    }

    return {
        user,
        error,
        toggleLogin,
        handleGooglesignin,
        logOut,
        handleRegistration,
        handleEmailChange,
        handlePasswordlChange,
        toggleLogin
    };
};

export default useFirebase;