import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/'
import MovieDetail from './containers/MovieDetail'


const App = ()  => {
  return (
    <div className="App">
     <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/movie/:imdbID' element={<MovieDetail />}/>
      </Routes>
      <Footer />
     </Router>
    </div>
  );
}

export default App;
