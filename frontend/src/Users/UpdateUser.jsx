import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateUser(){
    const {id} = useParams();
    // const [user, setUsers] = useState([])
    const navigate = useNavigate();

    //to display data
    useEffect(() => {
        axios.get('http://localhost:3000/users/'+id)
        .then(res =>{
            console.log(res.data[0])
            setValue({...values, 
                name: res.data[0].name,
                age: res.data[0].age,
                address: res.data[0].address,
            });
        })
        .catch(err => console.log(err));
    },[])

    const [values,setValue] = useState({
        name: '',
        age: '',
        address: ''
    })
    // ----------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------
    //to get data and update
    function handleSubmit(event){
        event.preventDefault();
        axios.put('http://localhost:3000/update-user/'+id,values).then(res => {
            console.log(res);
            navigate('/');
        }).catch(err => console.log(err));
    }
    return(
        // --------------------
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                    <h2>Update User</h2>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Enter Name' className='form-control'  
                        value={values.name} onChange={e => setValue({...values, name: e.target.value})} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Age</label>
                        <input type="text" placeholder='Enter Age' className='form-control' 
                        value={values.age} onChange={e => setValue({...values, age: e.target.value})}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Address</label>
                        <input type="text" placeholder='Enter Address' className='form-control' 
                        value={values.address} onChange={e => setValue({...values, address: e.target.value})} />
                    </div>
                    <button className="btn btn-success">Update</button>
                </form> 
            </div>
        </div>
        // --------------------
    )
}

export default UpdateUser