import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {

  return (
    <Router>
      <Switch>
        <Route path="/about">
          <h1>About</h1>

        </Route>
        <Route path="/users">
          <h1>User</h1>

        </Route>
        <Route path="/">
          <h1>Home</h1>
        </Route>
      </Switch>
    </Router>
  );
}