import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { adminServices } from '../services/methods';

function Create() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
    });
    const navigate = useNavigate();
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await adminServices.createRecipients(values);
            navigate('/');
        } catch (e) {
            console.log(e);
        }
    }
  return (
      <>
          <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
              <div className='w-50 bg-white rounded p-3'>
                  <form onSubmit={handleSubmit}>
                      <h2> Add Recipient</h2>
                      <div className='mb-2'>
                          <label htmlFor="">Name</label>
                          <input type="text" placeholder='Enter Name' className='form-control' onChange={e => setValues({...values, name: e.target.value})}  required/>
                      </div>
                      <div className='mb-2'>
                          <label htmlFor="">Email</label>
                          <input type="email" placeholder='Enter email' className='form-control' onChange={e => setValues({...values, email: e.target.value})} required />
                      </div>
                      <div className='mb-2'>
                          <label htmlFor="">Phone</label>
                          <input type="text" placeholder='Enter phone' className='form-control' onChange={e => setValues({...values, phone: e.target.value})} required />
                      </div>
                      <div className='mb-2'>
                          <label htmlFor="">Location</label>
                          <input type="text" placeholder='Enter location' className='form-control' onChange={e => setValues({...values, location: e.target.value})} required />
                      </div>
                      <button className='btn btn-primary'>Save</button>
                  </form>
              </div>
          </div>
      </>
  )
}

export default Create