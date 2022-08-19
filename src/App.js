import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import SignUp from './containers/SignUp';
import MovieDetail from './containers/MovieDetail'
import MovieList from './containers/MovieList';
import './App.css';

const App = ()  => {
  return (
    <div className="app">
      <Router>
        <Header />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home /> } />
              <Route exact path='/movies' element={<MovieList />} />
              <Route exact path="/signup" element={<SignUp />} />
              <Route exact path='/movies/:imdbID' element={<MovieDetail />} />
            </Routes>
          </div>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
