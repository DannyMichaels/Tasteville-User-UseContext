import { Switch, Route } from "react-router-dom";
import "./App.css";
import MainContainer from "./containers/MainContainer";
import Layout from "./layouts/Layout";
import Login from "./screens/Login";
import Register from "./screens/Register";
import { CurrentUserProvider } from "./currentUser/CurrentUserContext";

function App() {
  return (
    <CurrentUserProvider>
      <Layout>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <MainContainer />
          </Route>
        </Switch>
      </Layout>
    </CurrentUserProvider>
  );
}

export default App;
