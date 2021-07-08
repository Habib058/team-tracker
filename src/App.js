import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import TeamDetails from "./components/TeamDetails/TeamDetails";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const style ={
    backgroundColor:'black'
  }
  return (
    <div>
      <Router>
      <Switch>
        <Route path ='/home'>
          <Home/>
        </Route>
        <Route exact path = '/'>
          <Home/>
        </Route>
        <Route path ='/team/:teamName'>
          <TeamDetails/>
        </Route>
        <Route path ='*'>
          <NotFound/>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
