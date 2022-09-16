import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';

const EditUser = ({ user, setOpenEditUser }) => {
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);

  const editUserHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.put("/api/users/update", {
        _id: user._id,
        username,
        email,
      });

      console.log(data);
      toast.success("You have successfully update User!");
      setOpenEditUser(false);
    } catch (error) {
      toast.error("Update failed, please try again!");
    }
  };

  return (
    <div className="popup-container">
      <form onSubmit={editUserHandler}>
              <h2 className="popup-title">Edit User - {user.username}! </h2>
        <div className="close-form" onClick={() => setOpenEditUser(false)}>
          X
        </div>
        <div className="form-group">
          <label htmlFor="name">Username</label>
          <input
            required
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            id="name"
            value={username}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            id='email'
            value={email}
          />
        </div>
        <div className="popup-btn">
          <button type="submit">
            Update User <FontAwesomeIcon icon={faRefresh} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUser