import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateUser(){
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();
    
    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:3000/create-user',{name,age,address}).then(res => {
            console.log(res)
            navigate('/');
        }).catch(err => console.log(err));
    }

    return(
        // --------------------
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                    <h2>Create User</h2>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Enter Name' className='form-control' 
                        onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Age</label>
                        <input type="text" placeholder='Enter Age' className='form-control' 
                        onChange={e => setAge(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Address</label>
                        <input type="text" placeholder='Enter Address' className='form-control' 
                        onChange={e => setAddress(e.target.value)} />
                    </div>
                    <button className="btn btn-success">Submit</button>
                </form> 
            </div>
        </div>
        // --------------------
    )
}

export default CreateUser