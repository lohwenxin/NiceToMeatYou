import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import Search from './components/pages/Search'
import Services from './components/pages/Services'
import Products from './components/pages/Products'
import SignUp from './components/pages/SignUp'
import DonatePage from './components/pages/DonatePage'
import DonatePage2 from './components/pages/DonatePage2.js'
import ThankYou from './components/pages/ThankYou.js'
import CameraEntry from './scenes/CameraEntry'
import MenusEntry from './scenes/MenusEntry'
import DisplayCard from './components/pages/DisplayCard';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        {/* This means that everytime we see "/", it will be replaced with Home */}
        <Route path = '/' exact component = { Home }/>
        <Route path = '/services' component = {Services} />
        <Route path = '/products' component = {Products} />
        <Route path = '/sign-up' component = {SignUp} />
        <Route path = '/camera' component = {CameraEntry}/>
        <Route path = '/menus' component = {MenusEntry}/>
        <Route path = '/search' component = {Search} />
        <Route path = '/display-card' component = {DisplayCard} />
        <Route path = '/donate-page' component = {DonatePage}/>
        <Route path = '/page-2' component = {DonatePage2}/>
        <Route path = '/thank-you' component = {ThankYou}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;