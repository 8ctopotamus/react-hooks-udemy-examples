import React, { useState } from 'react'

const initialFormState = {
  username: '',
  email: '',
  password: '',
}

export default function() {
  const [form, setForm] = useState(initialFormState)
  const [user, setUser] = useState(null)

  const handleChange = event => {
    const { name, value } = event.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    setUser(form)
    setForm(initialFormState)
  }

  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <h2>Register</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'grid',
          alignItems: 'center',
          justifyItems: 'center',
        }}
      >
        <input
          onChange={handleChange}
          name="username"
          placeholder="Username"
          type="text"
          value={form.username}
        />
        <input
          onChange={handleChange}
          name="email"
          placeholder="Email"
          type="email"
          value={form.email}
        />
        <input
          onChange={handleChange}
          name="password"
          placeholder="Password"
          type="password"
          value={form.password}
        />
        <button type="submit">Submit</button>
      </form>

      {user && JSON.stringify(user, null, 2)}


    </div>
  )
}