import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Layout from "../Components/Layout";

export const AppRoutes = () => {
    return(
        <>
            <Router >
            <Switch>
                <Route exact path="/" component={Layout}>
                    
                </Route>
            </Switch>
            </Router>
        </>
    )
}