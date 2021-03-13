import React from 'react'
import {auth , provider } from './firebase'
import {Button } from '@material-ui/core'
import './Login.css'

function Login(props) {

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result)=>{
            const newUser = {
                name: result.user.displayName,
                photo:result.user.photoURL,
            } 
            localStorage.setItem('user',JSON.stringify(newUser))
            props.setUser(newUser)
        })
        .catch((error)=>{
            alert(error.message)
        })
    }

    return (
                <div className='login'>
                <img src='https://logos-download.com/wp-content/uploads/2016/02/Twitter_Logo_new.png' alt='' width='100px' />
                <h1>Sign in Twitter Clone</h1>
                <Button className='login__button' onClick={() => signIn()}>
                    Sign in with google
                </Button>
                </div>

    )
}

export default Login


