import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { adminServices } from '../services/methods';

function Edit() {
    const { id } = useParams();
    const navigate = useNavigate();

    const getRecipient = async () => {
        try {
            const res = await adminServices.getRecipient(id);
            setValues({...values, name: res.name, email: res.email, phone: res.phone, location: res.location});
            
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getRecipient();
    }, []);

     const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
     });
    
    const handleUpdate = async (event) => {
        event.preventDefault();
        try {
            await adminServices.updateRecipients(id, values);
            navigate('/');
        } catch (e) {
            console.log(e);
        }
    }
  return (
      <>
          <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
              <div className='w-50 bg-white rounded p-3'>
                  <form onSubmit={handleUpdate}>
                      <h2> Edit Recipient</h2>
                      <div className='mb-2'>
                          <label htmlFor="">Name</label>
                          <input type="text" placeholder='Enter Name' value={values.name} className='form-control' onChange={e => setValues({...values, name: e.target.value})} />
                      </div>
                      <div className='mb-2'>
                          <label htmlFor="">Email</label>
                          <input type="email" placeholder='Enter email' value={values.email} className='form-control' onChange={e => setValues({...values, email: e.target.value})} />
                      </div>
                      <div className='mb-2'>
                          <label htmlFor="">Phone</label>
                          <input type="text" placeholder='Enter phone' value={values.phone} className='form-control' onChange={e => setValues({...values, phone: e.target.value})} />
                      </div>
                      <div className='mb-2'>
                          <label htmlFor="">Location</label>
                          <input type="text" placeholder='Enter location' value={values.location} className='form-control' onChange={e => setValues({...values, location: e.target.value})} />
                      </div>
                      <button className='btn btn-primary'>update</button>
                  </form>
              </div>
          </div>
      </>
  )
}

export default Edit