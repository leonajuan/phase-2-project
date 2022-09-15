import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import UsersList from "./components/UsersList"
import FoodsList from "./components/FoodsList"
import RestaurantsList from "./components/RestaurantsList"
import { useState, useEffect } from "react";
import "./App.css"
import NewUsersForm from "./components/NewUsersForm";
import SearchBar from "./components/SearchBar";

export default function App() {

  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then(res => res.json())
      .then(usersData => {
        setUsers(usersData)
        setFilteredUsers(usersData)
      }
      )
  }, [])

  function handleAddUser(newUser) {
    const updatedUsersArray = [...users, newUser]
    setFilteredUsers(updatedUsersArray)
  }

  function filterUsers(searchText) {
    if (searchText === "") {
      setFilteredUsers(users)
    } else {
      setFilteredUsers(users.filter(user => {
        return (user.name.toLowerCase().includes(searchText.toLowerCase()))
          || (user.favoriteFood.toLowerCase().includes(searchText.toLowerCase()))
          || (user.favoriteRestaurant.toLowerCase().includes(searchText.toLowerCase()))
          || (user.bio.toLowerCase().includes(searchText.toLowerCase()))
      }))
    }
  }

  return (
    <>
      <Router>
        <Header />
        <NavBar />
        <div>
          <Switch>
            <Route path="/food">
              <FoodsList users={users} />
            </Route>
            <Route path="/restaurants">

              <RestaurantsList users={users} />
            </Route>
            <Route path="/">
              <SearchBar filterUsers={filterUsers} />
              <UsersList users={filteredUsers} />
            </Route>
          </Switch>
        </div>
      </Router>

      <NewUsersForm users={users} handleAddUser={handleAddUser} />
    </>
  );
}