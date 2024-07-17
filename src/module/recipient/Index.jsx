import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { adminServices } from '../services/methods';
import Table from '../components/Table';

function Index() {
    const navigate = useNavigate();
    const [recipients, setRecipients] = useState([]);

    const columns = [
    { Header: 'Name', accessor: 'name' },
    { Header: 'Email', accessor: 'email' },
    { Header: 'Phone', accessor: 'phone' },
    { Header: 'Location', accessor: 'location' }
    ];
    
    
    const actionButtons = [
    {
      label: 'View',
      url: (row) => `/show/${row.id}`
    },
    {
      label: 'Edit',
      url: (row) => `/edit/${row.id}`
    },
    {
      label: 'Delete',
    }
  ];

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

    const handleDelete = async (row) => {
        event.preventDefault();
        try {
            await adminServices.deleteRecipients(row.id);
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
                  <Table columns={columns} data={recipients} actionButtons={actionButtons} itemsPerPage={5}
      onDelete={handleDelete} />
                  {/* <table className='table'>
                      
                          <thead>
                              <tr>
                                  <th>id</th>
                                  <th>Name</th>
                                  <th>Phone</th>
                                  <th>Email</th>
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
                                  <td>{ recipient.created_at}</td>
                                  <td><Link className='btn btn-success' to={`show/${recipient.id}`}>View</Link><Link className='btn btn-primary' to={`edit/${recipient.id}`}>Edit</Link><Link onClick={() => handleDelete(recipient.id)} className='btn btn-danger'>Delete</Link></td>
                              </tr>
                          }) }
                      </tbody>
                  </table> */}
              </div>
          </div>
      </>
  )
}

export default Index