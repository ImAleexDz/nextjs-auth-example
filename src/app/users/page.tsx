import React from 'react'

const page = () => {
    const users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
    ];

  return (
    <div>
        <h1>
            Usuarios
        </h1>

        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name} </li>
            ))}
        </ul>
    </div>
  )
}

export default page