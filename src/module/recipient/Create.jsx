import React, { useState, useEffect } from 'react';
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
    const [files, setFiles] = useState([]);
    // const handleFileChange = (e) => {
    //     const selectedFile = e.target.files;
    //     console.log("Selected file:", selectedFile); // Debugging log
    //     setFile(selectedFile);
    //     console.log('file', file);
    // }

    const handleFileChange = (e) => {
    // Get the files from the event target
    const selectedFiles = Array.from(e.target.files);

    // Update the state with the selected files
    setFiles(selectedFiles);

    // Log for debugging
    console.log("Selected files:", selectedFiles);
  };

      useEffect(() => {
        console.log("File state updated:", files); // Log file state whenever it updates
    }, [files]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('name', values.name);
            formData.append('email', values.email);
            formData.append('phone', values.phone);
            formData.append('location', values.location);
            if (files.length > 0) {
            files.forEach((file, index) => {
                formData.append('files', file); // Use 'files' as the field name for multiple files
            });
        }
            await adminServices.createRecipients(formData);
            navigate('/');
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
                <div className='w-50 bg-white rounded p-3'>
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <h2>Add Recipient</h2>
                        <div className='mb-2'>
                            <label htmlFor="">Name</label>
                            <input type="text" placeholder='Enter Name' className='form-control' onChange={e => setValues({...values, name: e.target.value})} required />
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
                        <div className='mb-2'>
                            <label htmlFor="">File</label>
                            <input type="file" className='form-control' multiple onChange={handleFileChange} />
                        </div>
                        <button className='btn btn-primary'>Save</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Create;
