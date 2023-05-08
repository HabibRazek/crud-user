import React from 'react'
import axios from 'axios'

const AddUser = () => {
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [users, setUsers] = React.useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await axios.post('http://localhost:8999/user/api/user', { name, email })
        setUsers([...users, response.data])
        setName('')
        setEmail('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type="submit">Add User</button>
        </form>
    )
}

export default AddUser