import React, { useState } from "react";

function Users({ user }) {
  const { name, age, image, favoriteFood, favoriteRestaurant, bio } = user
  const [like, setLike] = useState(false)

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h2 className="name">{name}</h2>
      <h4>{age}</h4>
      <h3>{bio}</h3>
      <h4 className="food-heading">Favorite Food: {favoriteFood}</h4>
      <h4 className="restaurant-heading">Favorite Restaurant in NYC: {favoriteRestaurant}</h4>
      {like ? (
        <button onClick={() => setLike(false)} className="button">💗</button>
      ) : (
        <button onClick={() => setLike(true)} className="button">🖤</button>
      )}
    </li>
  )
}

export default Users;