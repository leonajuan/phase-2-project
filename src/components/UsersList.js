import React from "react";
import Users from "./Users"

function UsersList({ users }) {

  const usersComponents = users.map(user => {
    return <Users key={user.id} user={user} />
  })

  return (
    <main className="cards">
      {usersComponents}
    </main>
  )
}

export default UsersList;