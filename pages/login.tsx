import React from 'react'

export default function Login() {
  return (
    <div className="container mt-4">
      <h1 className="text-2xl">Tài khoản</h1>
      <form
        onSubmit={async (e) => {
          const data = new FormData(e.target as HTMLFormElement)
          console.log(data)
          e.preventDefault()
          const username = data.get('username')
          const password = data.get('password')
          const response = await fetch('/api/login', {
            method: 'post',
            headers: {
              'content-type': 'application/json',
              accept: 'application/json',
            },
            body: JSON.stringify({ username, password }),
          })
        }}
      >
        <input className="border w-full px-2 py-1" name="username" />
        <input className="border w-full px-2 py-1" name="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
