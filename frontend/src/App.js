import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Practice from './pages/Practice/Practice';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/practice' element={<Practice/>}/>
    </Routes>
    
    
    </>
    
  );
}

export default App;
