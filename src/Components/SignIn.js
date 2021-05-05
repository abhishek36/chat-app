import React from 'react'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import {auth} from '../Firebase/config'

function SignIn() {

    const signWithGoogle = ()=>{
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
    }

    return (
        <div className="signIn">
            <h2>🔥React ChatApp</h2>
           
            <button onClick={signWithGoogle} className="sign-in-button"><span className="head">  
            <img src="https://img.icons8.com/color/35/000000/google-logo.png"/><span className="head-span-sign">Sign In With Google</span></span></button>
        </div>
    )
}

export default SignIn
