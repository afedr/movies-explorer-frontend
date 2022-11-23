import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import ErrorPage from "../ErrorPage/ErrorPage";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";

function App() {


 
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header navigation={false} />
            <Main />
            <Footer />
          </Route>

          <Route path="/movies">
            <Header navigation={true} />
            <Movies isLoading={false}/>
            <Footer />
          </Route>

          <Route path="/saved-movies">
            <Header navigation={true} />
            <SavedMovies />
            <Footer />
          </Route>

          <Route path="/signin">
            <Login />
          </Route>

          <Route path="/signup">
            <Register />
          </Route>

          <Route path="/profile">
            <Header navigation={true} />
            <Profile />
          </Route>

          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
