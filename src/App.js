import './App.css';
import MoviesPage from "./MoviesPage/MoviesPage";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Header from "./header/Header";
import MovieCardInfo from "./MoviesPage/MovieCardInfo";

function App() {

  return (
    <Router>
        <Header />
        <Switch>
            <Redirect exact from="/" to="/movies" />

            <Route exact path='/movies'>
                <MoviesPage />
            </Route>
            <Route  path='/moviecard/'>
                <MovieCardInfo/>
            </Route>
        </Switch>

    </Router>

  );
}

export default App;
