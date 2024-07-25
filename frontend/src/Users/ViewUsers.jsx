import React,{useEffect, useState} from 'react'

import axios from 'axios'
import { Link } from 'react-router-dom';

function ViewUsers(){
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/users')
        .then(res =>setUsers(res.data))
        .catch(err => console.log(err));
    },[])

    const handleDelete = async (id) => {
        try {
            await axios.delete('http://localhost:3000/users/'+id);
            window.location.reload();
        }catch(err){
            console.log(err);
        }

    }

    return(
        // <div>Users front</div>
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <Link to='/create-user' className='btn btn-success'>Add</Link>

                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                            users.map((data, i ) => (
                                <tr key={i}>
                                <td>{data.name} </td>
                                <td>{data.age} </td>
                                <td>{data.address} </td>
                                <td>
                                    <Link to={`update-user/${data.id}`} className="btn btn-primary">Update</Link>
                                    <button className="btn btn-danger" onClick={e => handleDelete(data.id)}>Delete</button>
                                </td>
                            </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ViewUsers