import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>Welcome Page</h3>
      <Link to='/login' className='btn btn-succcess'>login</Link>
      <Link to='/register' className='btn btn-primary'>register</Link>

    </>
  )
}

export default App
