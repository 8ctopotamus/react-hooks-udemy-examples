import React, { useState } from 'react'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const handleSubmit = event => {
    event.preventDefault()
    const userData = { username, password }
    setUser(userData)
    setUsername('')
    setPassword('')
  }

  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <h2>Login</h2> 
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'grid',
          alignItems: 'center',
          justifyItems: 'center',
        }}
      >
        <input
          onChange={event => setUsername(event.target.value)}
          placeholder="Username"
          type="text" 
          value={username}
        />
        <input
          onChange={event => setPassword(event.target.value)}
          placeholder="Password"
          type="password"
          value={password}
        />
        <button type="submit">Submit</button>
      </form>

      {user && JSON.stringify(user, null, 2)}

    </div>
  )
}