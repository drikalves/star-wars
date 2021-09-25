import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="AppBody">
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
