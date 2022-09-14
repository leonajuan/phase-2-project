import React from "react";

function RestaurantsList({ users }) {
  const restaurantComponents = users.map(user => {
    return (
      <p>
        {user.favoriteRestaurant}
      </p>
    )
  })

  return (
    <main className="router-components">
      {restaurantComponents}
    </main>
  )
}

export default RestaurantsList;