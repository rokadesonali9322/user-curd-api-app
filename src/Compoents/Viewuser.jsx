import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

function Viewuser() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    contact: '',
  })

  useEffect(() => {
    loaduser()
  }, [])

  const loaduser = async () => {
    const result = await axios.get(`http://localhost:3004/users/${id}`)
    console.log(result.data)
    setUser(result.data)
  }
  const { id } = useParams()
  return (
    <div className=" container py-4 d-block m-auto">
      <h3 className="display-5 text-center fw-bold">View User</h3>
      <hr />
      <div className=" shadow list  w-50 d-block m-auto py-5 formdata ">
        <ul className="list-group  d-block m-auto ">
          <li className="list-group-item">Name : {user.name}</li>
          <li className="list-group-item">Email : {user.email}</li>
          <li className="list-group-item">Mobile : {user.contact}</li>
        </ul>
        <Link to="/" className="my-4">
          <button className=" btn btn-primary my-4 float-end">
            {' '}
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Viewuser
