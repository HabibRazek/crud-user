import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const UserPage = () => {


    const [users, setUsers] = React.useState([])

    const getUsers = async () => {
        const response = await axios.get('http://localhost:8999/user/api/user')
        setUsers(response.data)
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8999/user/api/user/${id}`)
        setUsers(users.filter(user => user.id !== id))
    }
    React.useEffect(() => {
        getUsers()
    }, [])
    return (
        <div>
            <Link to="/adduser">add</Link>
            <table border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                            <Link to={`/edit/${user.id}`}>
                                <button>Edit</button>
                            </Link>
                            </td>
                            <td><button onClick={() => deleteUser(user.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default UserPage