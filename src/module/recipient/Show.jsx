import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import { adminServices } from '../services/methods';


function Show() {
    const {id} = useParams();
    const [recipient, setRecipient] = useState([]);

    const getRecipient = async () => {
        try {
            const res = await adminServices.getRecipient(id);
            setRecipient(res);
        } catch (e) {
            console.log(e);
        }
    } 
    useEffect(() => {
        getRecipient();
    }, []);
  return (
      <>
          <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
              <div className='w-50 bg-white rounded p-3'>
                  <h2>Recipient Detail</h2>
                  <h2>Name: {recipient.name}</h2>
                  
                  <h2>Email: {recipient.email}</h2>
                  
                  <h2>Phone: {recipient.phone}</h2>
                  <Link className='btn btn-success mr-3' to={`/`}>Back</Link><Link className='btn btn-primary' to={`/edit/${recipient.id}`}>Edit</Link>
                  </div>
              </div>
      </>
  )
}

export default Show