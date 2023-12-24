import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Form, Alert, Button} from 'react-bootstrap'
import {useUserAuth} from '../context/UserAuthContext'
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const {logIn} = useUserAuth();
    let navigate = useNavigate() //for redirection

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("")
        try{
            await logIn(email, password)
            navigate("/home") //this is redirect
            console.log(user)
        } catch(err){
            setError(err.message)
        }
    }
  return (
    <div>
      <div className="row">
        <div className="col-md-6 mx-auto">
        <h2 className='mb-3'>Login</h2>
      {error && <Alert variant='danger'>{error}</Alert>}
      <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control
                    type='email'
                    placeholder='Email address'
                    onChange={(e)=>setEmail(e.target.value)}
                />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Control
                    type='password'
                    placeholder='password'
                    onChange={(e)=>setPassword(e.target.value)}
                />
            </Form.Group>

            <div className="dgrid gap-2">
                <Button variant='primary' type='submit'>Log in</Button>
            </div>
      </Form>
      <div className="p-4 box-mt-3 text-center">
        dont have an account? <Link to="/login">Sign In</Link>
      </div>
        </div>
      </div>
    </div>
  )
}

export default Login
