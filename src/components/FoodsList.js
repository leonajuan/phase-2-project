import React from "react";

function FoodsList({ users }) {

  const foodComponents = users.map(user => {
    return (
      <p className="router-components" key={user.id}>
        {user.favoriteFood}
      </p>
    )
  })

  return (
    <main>
      {foodComponents}
    </main>
  )
}

export default FoodsList;