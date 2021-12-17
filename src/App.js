import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home'
import MovieDetail from './containers/MovieDetail'
import './App.css';

const App = ()  => {
  return (
    <div className="app">
      <Router>
        <Header />
          <div className="container"></div>
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route exact path='/movies/:imdbID' element={<MovieDetail />}/>
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
