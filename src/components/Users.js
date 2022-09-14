import React, { useState, useEffect } from "react";

function Users() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then(res => res.json())
      .then(usersData => {
        console.log(usersData)
      })
  }, [])

  return (
    null
  )
}

export default Users;