import React, { useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';



const EditUser = () => {

    const [url, setUrl] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");

    const { id } = useParams();

    const eddUser = (id) => {
      axios.put('http://localhost:8080/api/user/' + id, {
        url: url,
        name: name,
        email: email,
        description: description,
      });
      window.location.href = "/";
    };



  return (
    <div className="container">
      <h2 className="text-center mt-3">Edit User</h2>

      {id}

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
        <button
          onClick={() => eddUser(id)}
          className="btn btn-outline-primary mt-3"
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
      </div>
    </div>
  );
}

export default EditUser