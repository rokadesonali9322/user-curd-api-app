import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Adduser() {
  const navigate = useNavigate()

  const [errors, setErrors] = useState({})
  const [user, setUser] = useState({
    name: '',
    email: '',
    contact: '',
  })

  const { name, email, contact } = user
  const OnInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const validateForm = () => {
    let errors = {}

    if (!name.trim()) {
      errors.name = 'Name is required'
    }

    if (!email.trim()) {
      errors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Invalid email address'
    }

    if (!contact.trim()) {
      errors.contact = 'Mobile is required'
    } else if (!/^\d{10}$/.test(contact)) {
      errors.contact = 'Invalid mobile number'
    }

    setErrors(errors)

    return Object.keys(errors).length === 0
  }
  const handlesubmit = async (e) => {
    e.preventDefault()

    if (validateForm()) {
      await axios.post('http://localhost:3004/users', user)
      toast.success('User add Successfully')
      navigate('/')
    }
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12  py-3">
          <h3 className=" text-center">Add User Details</h3>
        </div>
        <div className="shadow w-50 d-block mx-auto formdata">
          <form className="mx-4" onSubmit={handlesubmit}>
            <div className="form-group my-4">
              <input
                type="text"
                placeholder="Enter  name"
                className="form-control"
                name="name"
                value={name}
                onChange={(e) => OnInputChange(e)}
              />
              {errors.name && <div className="error">{errors.name}</div>}
            </div>
            <div className="form-group my-4">
              <input
                type="email"
                placeholder="Enter  Email"
                className="form-control"
                name="email"
                value={email}
                onChange={(e) => OnInputChange(e)}
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>
            <div className="form-group my-4">
              <input
                type="number"
                placeholder="Enter contact"
                className="form-control"
                name="contact"
                value={contact}
                onChange={(e) => OnInputChange(e)}
              />
              {errors.contact && <div className="error">{errors.contact}</div>}
            </div>

            <div className="form-group my-4 w-100">
              <input
                type="submit"
                className="btn btn-success  px-5  w-100 "
                value="Add"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Adduser
