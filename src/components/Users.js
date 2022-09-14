import React, { useState } from "react";

function Users({ user }) {
  const { name, age, image, favoriteFood, favoriteRestaurant, bio } = user
  const [like, setLike] = useState(true)

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <h4>{age}</h4>
      <h3>{bio}</h3>
      <h4>Favorite Food: {favoriteFood}</h4>
      <h4>Favorite Restaurant in NYC: {favoriteRestaurant}</h4>
      {like ? (
        <button onClick={() => setLike(false)} className="button">🍑</button>
      ) : (
        <button onClick={() => setLike(true)} className="button">🤮</button>
      )}
    </li>
  )
}

export default Users;