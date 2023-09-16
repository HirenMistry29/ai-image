// import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import { BrowserRouter as Router, Route} from 'react-router-dom';
import Page1 from './pages/page1';
import { Route, Routes } from 'react-router-dom';
import Page2 from './pages/page2';
// import Page3 from './pages/page3';
import Page4 from './pages/pg2-dummy'
import Page3 from './pages/page3';

function App() {
  return (
    <>
    {/* <Page1/> */}
    <Routes>
      <Route path='/' element={<Page1/>}/>
      <Route path='/page2' element={<Page4/>}/>
      <Route path='/page3' element={<Page3/>}/>
    </Routes>
    </>
  );
}

export default App;
