import React, { useSyncExternalStore } from 'react'
import {useNavigate} from 'react-router-dom'
import {Form, Alert, Button} from 'react-bootstrap'
import {useUserAuth} from '../context/UserAuthContext'

const Home = () => {
    const {logOut, user} = useUserAuth()
    const navigate = useNavigate()

    const handleLogout = async () => {
        try{
            await logOut();
            navigate('/')
        } catch(err){
            console.log(err.message);
        }
    }
  return (
    <>
    <h2>
      Welcome to Homepage
    </h2>
    <p>Hi, {user.email}</p>
    <Button onClick={handleLogout} variant='danger'>Log Out</Button>
    </>
  )
}

export default Home
