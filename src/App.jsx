import './App.css'
import ThemeApp from './theme/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import React from 'react';
import ButtonAppBar from './components/NavBar';

function App() {
  return (
    <ThemeApp>
      <React.Fragment>
        <ButtonAppBar position="fixed" />
      </React.Fragment>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
      </BrowserRouter>
    </ThemeApp>
  );
}

export default App
