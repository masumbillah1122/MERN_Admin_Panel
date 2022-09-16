import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';

const ChangePassUser = ({ user, setOpenChangePassUser }) => {
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

  const changePassHandler = async (e) => {
      e.preventDefault();
      
      if (password !== confirmPass) {
          toast.error("Password doesn't match");
          return;
      } else {
        try {
            const { data } = await axios.put("/api/users/update", {
              _id: user._id,
              password,
            });

            console.log(data);
            toast.success("You have successfully update Password!");
            setOpenChangePassUser(false);
        }catch (error) {
            toast.error("Update failed, please try again!");
        }
      }

  };

  return (
    // if the user forgets his password, you can easily change it
    <div className="popup-container">
      <form onSubmit={changePassHandler}>
        <h2 className="popup-title">
          Change Password for the {user.username}!{" "}
        </h2>
        <div
          className="close-form"
          onClick={() => setOpenChangePassUser(false)}
        >
          X
        </div>
        <div className="form-group">
          <label htmlFor="password">New Password</label>
          <input
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            value={password}
          />
        </div>
        <div className="form-group">
          <label htmlFor="r_pass">Confirm Password</label>
          <input
            required
            type="password"
            onChange={(e) => setConfirmPass(e.target.value)}
            id="r_pass"
            value={confirmPass}
          />
        </div>
        <div className="popup-btn">
          <button type="submit">
            Update Password <FontAwesomeIcon icon={faRefresh} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassUser
