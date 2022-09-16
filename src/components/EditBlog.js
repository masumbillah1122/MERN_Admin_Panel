import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import axios from 'axios';

const EditBlog = ({ blog, setOpenEdit }) => {

    const [title, setTitle] = useState(blog.title);
    const [description, setDescription] = useState(blog.description);

    const editBlogHandler = async(e) => {
        e.preventDefault();
        
        try {

            const { data } = await axios.put('/api/blogs/update', {
                _id: blog._id,
                title,
                description
            });

            console.log(data);
            toast.success('You have successfully update Blog!');
            setOpenEdit(false);
            
        } catch (error) {
            toast.error('Update failed, please try again!');
        }
  };

  return (
    <div className="popup-container">
      <form onSubmit={editBlogHandler}>
        <h2 className="popup-title">Edit My Blog! </h2>
        <div className="close-form" onClick={() => setOpenEdit(false)}>
          X
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            required
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            value={title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="desc">Description</label>
          <textarea
            name="desc"
            id="desc"
            cols="30"
            rows="8"
            required
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>
        <div className="popup-btn">
          <button type="submit">
            Update Blog <FontAwesomeIcon icon={faRefresh} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBlog