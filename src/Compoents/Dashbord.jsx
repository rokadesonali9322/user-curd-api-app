import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AiFillEye } from 'react-icons/ai'
import { MdModeEdit, MdDelete } from 'react-icons/md'
import './Dashbord.css'

function Dashbord() {
  const [user, setuser] = useState([])
  useEffect(() => {
    loaduser()
  }, [])
  const loaduser = async () => {
    const result = await axios.get(`http://localhost:3004/users`)
    // console.log(result, 'add').
    setuser(result.data)
  }

  const deleteuser = async (id) => {
    await axios.delete(`http://localhost:3004/users/${id}`)
    loaduser()
    toast.error('Deleted User Successfully')
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10  py-3">
          <Link to="/adduser" className="btn btn-success float-end px-3 m-5">
            Add user
          </Link>
        </div>
        <div className="  col-lg-12 col-md-12 col-sm-12  mx-auto  overflow-x-auto  userdata ">
          <table className="table table-hover  overflow-x-scroll userdata  ">
            <thead className="text-white bg-secondary text-center ">
              <tr>
                <th>Sr.no</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th colSpan={3}>Action</th>
              </tr>
            </thead>
            <tbody>
              {user?.length > 0 &&
                user?.map((ele, index) => {
                  console.log(ele)
                  const { id, name, email, contact } = ele
                  return (
                    <tr className="text-center" key={index}>
                      <td>{id}</td>
                      <td>{name}</td>
                      <td>{email}</td>
                      <td>{contact}</td>
                      <td>
                        <Link
                          to={`/Viewuser/${id}`}
                          className="btn btn-medium btn-primary mx-3 "
                        >
                          <AiFillEye size={30} />
                        </Link>
                        <Link
                          to={`/Edituser/${id}`}
                          className="btn btn-medium btn-primary mx-3 "
                        >
                          <MdModeEdit size={30} />
                        </Link>
                        <button
                          className="btn btn-medium btn-danger "
                          onClick={() => deleteuser(id)}
                        >
                          <MdDelete size={30} />
                        </button>
                      </td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashbord
