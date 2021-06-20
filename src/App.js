import './App.css';
import Home from './components/Home';
import AddBlogs from './components/AddBlogs';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <Router>
    <Navbar />
    <div className="App">
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <AddBlogs />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
