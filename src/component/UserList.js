import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

import './userlist.css'

const UserList = () => {

  const [users, setUsers] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:8080/api/users")
    .then((res) => setUsers(res.data))
    .catch((err) => console.log(err))
  }, [])


  const deleteUser  = (id) => {
    axios.delete("http://localhost:8080/api/user/" + id);
    
    window.location.reload();
  }
  

  return (
    <div className="container mt-4">
      <div className="row mt-2">
        {users.map((user, index) => (
          <div
            key={index}
            className="col-12 col-md-6 col-lg-4 mt-2 mb-3 animate__animated animate__bounceInLeft"
          >
            <div className="card">
              <img
                src={user.url}
                className="card-img-top imgCard"
                alt="Avatar"
              />

              <div className="card-body">
                <div className="d-flex justify-content-center">
                  <h5 className="card-title">{user.name}</h5>
                </div>
                <div className="d-flex justify-content-center">
                  <p>{user.email}</p>
                </div>
                <p className="card-text">{user.description}</p>

                <div className="d-flex justify-content-between">
                  <Link to={`/edituser/${user._id}`}>
                    <button className="btn btn-outline-success">
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                  </Link>
                  <button onClick={() => deleteUser(user._id)} className="btn btn-outline-danger">
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList