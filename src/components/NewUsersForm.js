import React, { useState } from "react"

function NewUsersForm({ users, handleAddUser }) {

  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [image, setImage] = useState("")
  const [food, setFood] = useState("")
  const [restaurant, setRestaurant] = useState("")
  const [bio, setBio] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    console.log(food)
    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: users.length + 1,
        name: name,
        age: age,
        image: image,
        favoriteFood: food,
        favoriteRestaurant: restaurant,
        bio: bio
      }),
    })
      .then((res) => res.json())
      .then((newUser) => handleAddUser(newUser))
  }

  return (
    <div className="new-user-form">
      <h2>New User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" name="age" step="1" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
        <input type="text" name="favoriteFood" placeholder="Favorite Food" value={food} onChange={(e) => setFood(e.target.value)} />
        <input type="text" name="favoriteRestaurant" placeholder="Favorite Restaurant in NYC" value={restaurant} onChange={(e) => setRestaurant(e.target.value)} />
        <input type="text" name="bio" placeholder="Bio" value={bio} onChange={(e) => setBio(e.target.value)} />
        <button type="submit">Add User</button>
      </form>
    </div>
  )
}

export default NewUsersForm;