import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  bg-dark px-5">
      <Link to="/" className="navbar-brand  d-block m-auto py-4 fs-8 ">
        <h2> User app</h2>
      </Link>
    </nav>
  )
}

export default Navbar
