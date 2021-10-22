import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export const AppRoutes = () => {
    return(
        <>
            <Router >
            <Switch>
                <Route exact path="/" component={}>
                    
                </Route>
            </Switch>
            </Router>
        </>
    )
}