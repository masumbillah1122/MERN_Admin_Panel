import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import axios from 'axios';

const AddBlogs = () => {

   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');

  const addBlogHandler = async (e) => {
    e.preventDefault();

    try {

      const { data } = await axios.post('/api/blogs/add', {
        title,
        description
      });

      console.log(data);
      toast.success('You have successfully added a new blog!');
      setTitle('');
      setDescription('');
      
      
    } catch (error) {
      toast.error('Error adding new blog!');
    }
  }

  return (
    <div className='addb-container'>
      <form onSubmit={addBlogHandler} className='addb-form'>
        <h2 className="popup-title">My New Blog! </h2>
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
            Add Blog <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddBlogs
