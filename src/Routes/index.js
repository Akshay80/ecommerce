import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Contact from "../Pages/Contact"

export const AppRoutes = () => {
    return(
        
            <Router >
            <Switch>
                <Route exact path="/contact" component={Contact} />  
            </Switch>
            </Router>
        
    )
    }