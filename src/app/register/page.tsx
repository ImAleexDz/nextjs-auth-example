import React from 'react'

const page = () => {
  return (
    <div>
        <form action="">
            <h1>Register</h1>
            <input type="text" placeholder='Full Name'/><br />
            <input type="text" placeholder='Phone'/><br />
            <input type="email" placeholder="Email" /><br />
            <input type="password" placeholder="Password" /><br />
            <button type="submit">Register</button>
        </form>
    </div>
  )
}

export default page