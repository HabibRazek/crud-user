import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const Edit = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8999/user/api/user/${id}`).then((res) => {
            setName(res.data.name);
            setEmail(res.data.email);
        });
    }, [id]);
    const navigate = useNavigate();

    const data = {
        id:id,
        name: name,
        email: email,
    };
    function Update(e) {
        e.preventDefault();
        axios.put(`http://localhost:8999/user/api/user`, data).then(navigate("/"));
    }
    return (
        <div>
            <h2>User Details</h2>
            <form>
                <label>
                    Name:
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Enter your name"
                    />
                </label>
                <label>
                    Email:
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Enter your email"
                    />
                </label>

                <button type="submit" onClick={Update}>
                    UPDATE USER
                </button>
            </form>
        </div>

    )
}

export default Edit