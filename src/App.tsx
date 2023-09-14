import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';

function App() {
  return (
    <>
    <Page1></Page1>
    {/* <Router>
      <Switch>
        <Route path="/" Component={Page1} />
        <Route path="/page2" Component={Page2} />
        <Route path="/page3" Component={Page3} />
      </Switch>
    </Router> */}
    </>
  );
}

export default App;
