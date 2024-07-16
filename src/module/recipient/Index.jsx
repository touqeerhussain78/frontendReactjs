import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { adminServices } from '../services/methods';

function Index() {
    const navigate = useNavigate();
    const [recipients, setRecipients] = useState([]);

    const getRecipients = async () => {
        try {
            const res = await adminServices.getRecipients();
            setRecipients(res);
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        getRecipients();
    }, []);

    const handleDelete = async (id) => {
        event.preventDefault();
        try {
            await adminServices.deleteRecipients(id);
            location.reload();
        } catch (e) {
            console.log(e);
        }
    }
  return (
      <>
          <div className='d-flex vh-100 bg-primary justify-content-center align-item-center'>
              <div className='w-70 bg-white rounded p-3'>
                  <h2>Recipients List</h2>
                  <div className='d-flex justify-content-end'>
                      
                  <Link to="/create" className='btn btn-success'>Create +</Link>
                  </div>
                  <table className='table'>
                      
                          <thead>
                              <tr>
                                  <th>id</th>
                                  <th>Name</th>
                                  <th>Phone</th>
                                  <th>Email</th>
                                  <th>Status</th>
                                  <th>CreatedAT</th>
                                  <th>Action</th>
                              </tr>
                      </thead>
                      <tbody>
                          {recipients.map((recipient, index) => {
                              return <tr key={index}>
                                  <td>{ recipient.id}</td>
                                  <td>{ recipient.name}</td>
                                  <td>{ recipient.phone}</td>
                                  <td>{ recipient.email}</td>
                                  <td>{ recipient.status}</td>
                                  <td>{ recipient.created_at}</td>
                                  <td><Link className='btn btn-success' to={`show/${recipient.id}`}>View</Link><Link className='btn btn-primary' to={`edit/${recipient.id}`}>Edit</Link><Link onClick={() => handleDelete(recipient.id)} className='btn btn-danger'>Delete</Link></td>
                              </tr>
                          }) }
                      </tbody>
                  </table>
              </div>
          </div>
      </>
  )
}

export default Index