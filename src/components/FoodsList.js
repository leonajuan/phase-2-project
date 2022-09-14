import React from "react";
import Foods from "./components/Foods"

function FoodsList({ users }) {

  const foodComponents = users.map(user => {
    return <Foods />
  })

  return (
    <li>
      {foodComponents}
    </li>
  )
}

export default FoodsList;