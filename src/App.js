import Navbar from './component/Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Services from './component/Services';
import Contact from './component/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/service" component={Services}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
