import React from "react";

function FoodsList({ users }) {

  const foodComponents = users.map(user => {
    return (
      <p key={user.id}>
        {user.favoriteFood}
      </p>
    )
  })

  return (
    <main className="router-components">
      {foodComponents}
    </main>
  )
}

export default FoodsList;