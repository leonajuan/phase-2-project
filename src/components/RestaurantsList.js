import React from "react";

function RestaurantsList({ users }) {
  const restaurantComponents = users.map(user => {
    return (
      <p className="router-components" key={user.id}>
        {user.favoriteRestaurant}
      </p>
    )
  })

  return (
    <main>
      {restaurantComponents}
    </main>
  )
}

export default RestaurantsList;