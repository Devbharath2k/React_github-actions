import React, { useState, useEffect } from 'react';
import axios from 'axios';

function About() {
    const [value, setValue] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userdata = await axios.get('http://localhost:4000/api/get');
                console.log(userdata.data.data);
                setValue(userdata.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData()
    }, []);
    
    return (
        <div>
            <div className='container mt-5 text-capitalize text-center'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Email</th>
                            <th scope="col">Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {value.map((data, id) => (
                            <tr key={id}>
                                <td>{id + 1}</td>
                                <td>{data.fname}</td>
                                <td>{data.lname}</td>
                                <td>{data.email}</td>
                                <td>{data.passwd}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default About;
