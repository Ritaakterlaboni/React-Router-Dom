import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className="bg-blue-600 text-white">
      <div>
        <ul  className="flex items-center justify-center gap-8 text-xl py-5">
          <Link to={'/'}>
          <li>Home</li>
          </Link>
           <Link to={'about'}>
          <li>About</li>
          </Link>
           <Link to={'/contact'}>
          <li>Contact</li>
          </Link>
           <Link to={'signup'}>
          <li>SignUp</li>
          </Link>
          
          
          

        </ul>
      </div>
    </div></>
  )
}

export default Header