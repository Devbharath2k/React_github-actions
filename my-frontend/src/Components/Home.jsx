// frontend/src/Home.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
    const [data, setData] = useState({
        fname: '',
        lname: '',
        email: '',
        passwd: '',
    });
const [value, setValue] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/get');
                setValue(response.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/api/post', data);
            console.log(response.data.data);
            setData({ fname: '', lname: '', email: '', passwd: '' });
            alert('Successfully created the user');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container mt-3 pt-3">
            <div className="card">
                <div className="card-body">
                    <p className="display-6 fw-semibold text-center text-capitalize">
                        Welcome to club <span className="text-success fw-semibold">Raji</span>
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="Username" className="form-label">
                                Username
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="fname"
                                name="fname"
                                onChange={handleChange}
                                value={data.fname}
                                placeholder="Username"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Lastname" className="form-label">
                                Lastname
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="lname"
                                name="lname"
                                onChange={handleChange}
                                value={data.lname}
                                placeholder="Lastname"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="E-mail" className="form-label">
                                E-mail
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                name="email"
                                onChange={handleChange}
                                value={data.email}
                                placeholder="E-mail"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="passwd"
                                name="passwd"
                                onChange={handleChange}
                                value={data.passwd}
                                placeholder="Password"
                            />
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <div className="container mt-5 text-capitalize text-center">
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
                            {value.map((user, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.fname}</td>
                                    <td>{user.lname}</td>
                                    <td>{user.email}</td>
                                    <td>{user.passwd}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Home;
