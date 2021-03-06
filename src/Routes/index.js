import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "../Pages/Contact";
import Login from "../Components/Authentication/Login";
import Signup from "../Components/Authentication/Signup";
import ForgotPassword from "../Components/Authentication/ForgotPassword";
import CartContainer from "../Pages/CartContainer/cart.container";

export const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/cart" component={CartContainer} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
      </Switch>
    </Router>
  );
};
