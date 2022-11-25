import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CurrentUserContext } from "../CurrentUserContext/CurrentUserContext";
import { useEffect, useState } from "react";
import { mainApi } from "../../utils/MainApi";
import { useHistory } from "react-router";
import "./App.css";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
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

  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('loggedIn'));
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);


  function handleUpdateUser(data) {
    mainApi
      .updateUserProfile(data)
      .then((value) => {
        setCurrentUser(value);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLogout() {
      localStorage.removeItem('jwt');
      localStorage.removeItem('loggedIn');
      localStorage.removeItem('renderCurrentMovies');
      localStorage.removeItem('searchQuery')
      setLoggedIn(false);
      setCurrentUser({});
      history.push('/');
  }

  function handleLogin(email, password) {
    return mainApi.login(email, password)
      .then((data) => {
        setLoggedIn(true);
        localStorage.setItem('loggedIn', true);
      });
  }

  function addBookmark(movie) {
    mainApi.addBookmark(movie)
    .then ((movie) => {
      setSavedMovies([...savedMovies, { ...movie}]);
    })
    .catch ((data) => {
      console.log(data)
    })
  }

  function isSaved(movie) {
    return savedMovies.some(i => i.movieId === movie.id);
  }

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      mainApi.checkToken(jwt)
        .then((res) => {
          setLoggedIn(true);
          setCurrentUser(res);
          localStorage.setItem('loggedIn', true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);
  
  useEffect(() => {
    if (savedMovies.length === 0 && currentUser.email) {
      mainApi.getSavedMovies()
        .then ((movies) => {
          setSavedMovies(movies);
        })
        .catch ((data) => {
          console.log(data);
      
        })
    }  
  }, [currentUser, savedMovies]);

 return (
  <CurrentUserContext.Provider value={currentUser}>
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header navigation={loggedIn} />
            <Main />
            <Footer />
          </Route>

          <ProtectedRoute exact path="/movies" loggedIn={loggedIn} redirectTo='/'>
            <Header navigation={true} />
            <Movies isLoading={false} addBookmark={addBookmark} isSaved={isSaved}/>
            <Footer />
          </ProtectedRoute>

          <ProtectedRoute path="/saved-movies" loggedIn={loggedIn} redirectTo='/'>
            <Header navigation={true} />
            <SavedMovies renderSavedCurrentMovies={savedMovies} />
            <Footer />
          </ProtectedRoute>

          <Route path="/signin">
            <Login handleLogin={handleLogin}/>
          </Route>

          <Route path="/signup">
            <Register /> 
          </Route>

          <ProtectedRoute path="/profile" loggedIn={loggedIn} redirectTo='/'>
            <Header navigation={true}/>
            <Profile onUpdateProfile={handleUpdateUser} logOutHandler={handleLogout} />
          </ProtectedRoute>

          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
