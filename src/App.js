import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Home from './Pages/home';
import List from './Pages/list';
import Nav from './Components/Home/nav'
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route exact path="/" component={Home}/>
        <Route path="/list" component={List}/>
      </Router>
    </div>
  );
}

export default App;
