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
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("loggedIn"));
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [isSavedMoviesLoaded, setIsSavedMoviesLoaded] = useState(false);

  function handleUpdateUser(data) {
    return mainApi
      .updateUserProfile(data)
      .then((value) => {
        setCurrentUser(value);
      });
  }

  function handleLogout() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("renderCurrentMovies");
    localStorage.removeItem("searchQuery");
    localStorage.removeItem("isFilterOn");
    setLoggedIn(false);
    setSavedMovies([]);
    setIsSavedMoviesLoaded(false);
    setCurrentUser({});
    history.push("/");
  }

  function handleLogin(email, password) {
    return mainApi.login(email, password).then((data) => {
      setLoggedIn(true);
      localStorage.setItem("loggedIn", true);
      checkTokenAndGetUserData();
    });
  }

  function addBookmark(movie) {
    mainApi
      .addBookmark(movie)
      .then((movie) => {
        setSavedMovies([...savedMovies, { ...movie }]);
      })
      .catch((data) => {
        console.log(data);
      });
  }

  function deleteBookmark(movie) {
    const savedMovie = movie._id
      ? movie
      : savedMovies.find((i) => i.movieId === movie.id);
    mainApi
      .deleteBookmark(savedMovie)
      .then(() => {
        setSavedMovies(savedMovies.filter((i) => i._id !== savedMovie._id));
      })
      .catch((data) => {
        console.log(data);
      });
  }

  function isSaved(movie) {
    return savedMovies.some((i) => i.movieId === movie.id);
  }

  function checkTokenAndGetUserData() {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      mainApi
        .checkToken(jwt)
        .then((res) => {
          setLoggedIn(true);
          setCurrentUser(res);
          localStorage.setItem("loggedIn", true);
        })
        .catch((err) => {
          console.log(err);
          // Если произошла ошибка, то безопаснее разлогинить пользователя
          handleLogout();
        });
    } else if (loggedIn) {
      // Если токена нет, то безопаснее разлогинить пользователя
      handleLogout();
    }
  }

  useEffect(() => {
    checkTokenAndGetUserData();
  }, []);

  useEffect(() => {
  
    if (currentUser.email && !isSavedMoviesLoaded) {
      mainApi
        .getSavedMovies()
        .then((movies) => {
          setSavedMovies(movies);
          setIsSavedMoviesLoaded(true)
        })
        .catch((data) => {
          console.log(data);
        });
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

            <ProtectedRoute
              exact
              path="/movies"
              loggedIn={loggedIn}
              redirectTo="/"
            >
              <Header navigation={true} />
              <Movies
                isLoading={false}
                addBookmark={addBookmark}
                isSaved={isSaved}
                deleteBookmark={deleteBookmark}
              />
              <Footer />
            </ProtectedRoute>

            <ProtectedRoute
              path="/saved-movies"
              loggedIn={loggedIn}
              redirectTo="/"
            >
              <Header navigation={true} />
              <SavedMovies
                savedMovies={savedMovies}
                deleteBookmark={deleteBookmark}
              />
              <Footer />
            </ProtectedRoute>

            <ProtectedRoute path="/signin" loggedIn={!loggedIn} redirectTo="/">
              <Login handleLogin={handleLogin} />
            </ProtectedRoute>

            <ProtectedRoute path="/signup" loggedIn={!loggedIn} redirectTo="/">
              <Register handleLogin={handleLogin}/>
            </ProtectedRoute>

            <ProtectedRoute path="/profile" loggedIn={loggedIn} redirectTo="/">
              <Header navigation={true} />
              <Profile
                onUpdateProfile={handleUpdateUser}
                logOutHandler={handleLogout}
              />
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
