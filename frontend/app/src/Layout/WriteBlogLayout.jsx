import { useState } from 'react';
import '../styles/WriteContainer.css'
import SD from '../SD';
import { useNavigate } from "react-router-dom";

export default function WriteBlogLayout(){
  let navigate = useNavigate();
    async function handleSubmit(e){
        e.preventDefault()
        const formData = new FormData(e.target); 
        const formDataObject = Object.fromEntries(formData.entries()); 

          fetch('http://localhost:3000/blogs/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formDataObject)
          })
          .then(response => {
            if (response.ok) {
              console.log('Blog post submitted successfully');
              // Optionally, do something upon successful submission
              navigate(`/Blog`); 
            } else {
              console.error('Failed to submit blog post');
            }
          })
          .catch(error => {
            console.error('Error submitting blog post:', error);
          });
    }

    return(
        <div className="write-container">
            <form method="post" encType='multipart/form-data' onSubmit={handleSubmit}  >
                <div className='inner'>
                <label>Enter title</label>
                <input name="title" type='text' placeholder='title'/>

                <label>Enter small description</label>
                <textarea name='smallDescription'></textarea>

                <label>Enter  description</label>
                <textarea name='description'></textarea>

                <label>upload image</label>
                <input type='file' name="imagePath"></input>

                <input type="checkbox" name="isDefaultBlog" value={false} hidden  />

                <button>Submit</button>
                </div>

            </form>
        </div>
    )
}

