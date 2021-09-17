import { BrowserRouter, Switch, Route } from "react-router-dom";
import Feed from "../pages/Feed";
import Login from "../pages/Login";
import Register from "../pages/Register";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route exact path="/feed">
          <Feed />
        </Route>

        <Route exact path="/register">
          <Register />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
