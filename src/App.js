import "./App.css";
import NavigationBar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./pages/privateRoute";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/private" component={PrivateRoute} />
      </Switch>
    </Router>
  );
}

export default App;
