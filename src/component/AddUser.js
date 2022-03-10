import React, { useState } from 'react'
import axios from 'axios'


const AddUser = () => {



  const [url, setUrl] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')



  const addUser = () => {
    axios.post('http://localhost:8080/api/user', 
    {
      url: url,
      name: name,
      email: email,
      description: description
    })
    window.location.href = "http://localhost:3000/";
  }



  return (
    <div className="container">
      <h2 className="text-center mt-3">Crete User</h2>

      <input
        className="form-control mb-2 mt-5"
        type="text"
        placeholder="Url-Imagen"
        onChange={(e) => {
          setUrl(e.target.value);
        }}
      />
      <input
        className="form-control mb-2"
        type="text"
        placeholder="Nombre"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        className="form-control mb-2"
        type="email"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <textarea
        className="form-control mb-2"
        placeholder="Descripción"
        row="3"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></textarea>

      <div className="d-flex justify-content-center">
        <button onClick={addUser} className="btn btn-outline-primary mt-3">
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
    </div>
  );
}

export default AddUser