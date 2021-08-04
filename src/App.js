import {Switch,Route} from 'react-router-dom' ;
import Home from './component/Home';
import Navbar from './component/Navbar';
import Logout from './component/Logout';
import Login from './component/Login';
import Create from "./component/Create";
import Projects from './component/Projects';
import Error from './component/Error';
import ProjectSummary from './component/ProjectSummary';


function App() {
  return (
    <div className="App">
            <Navbar/>
            <Switch>
               <Route exact path="/" component={Home}></Route>
               <Route exact path='/create' component={Create}></Route>
               <Route exact path='/projects' component={Projects}></Route>
               <Route path='/projects/:id' component={ProjectSummary}></Route>
               <Route path='/login' component={Login}></Route>
               <Route path='/logout' component={Logout}></Route>
               <Route component={Error}></Route>
            </Switch>
    </div>
  );
}

export default App;
