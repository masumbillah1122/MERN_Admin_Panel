import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faKey } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import axios from 'axios';
import ViewUser from './ViewUser';
import EditUser from './EditUser';
import ChangePassUser from './ChangePassUser';

const AllUser = ({ user, }) => {
    
    const [openViewUser, setOpenViewUser] = useState(false);
    const [openEditUser, setOpenEditUser] = useState(false);
    const [openChangePassUser, setOpenChangePassUser] = useState(false);

    const handlerDeleteUser = async (e) => {
      e.preventDefault();

      try {
        const { data } = await axios.delete(`/api/users/delete/${user._id}`);

        if (data) {
          toast.success("User deleted successfully!");
        }
      } catch (error) {
        toast.error("User not deleted");
      }
    };


  return (
    <>
      <div className="al-group" key={user._id}>
        <div className="al-left">
          <h3 className="al-subtitle">{user.username}</h3>
        </div>
        <div className="al-right">
          <FontAwesomeIcon icon={faEye} onClick={() => setOpenViewUser(true)} />
          <FontAwesomeIcon
            icon={faEdit}
            onClick={() => setOpenEditUser(true)}
          />
          <FontAwesomeIcon
            icon={faKey}
            onClick={() => setOpenChangePassUser(true)}
          />
          <FontAwesomeIcon icon={faTrash} onClick={handlerDeleteUser} />
        </div>
      </div>
      {openViewUser && <ViewUser user={user} setOpenViewUser={setOpenViewUser} />}
      {openEditUser && <EditUser user={user} setOpenEditUser={setOpenEditUser} />}
      {openChangePassUser && <ChangePassUser user={user} setOpenChangePassUser={setOpenChangePassUser} />}
    </>
  );
}

export default AllUser
