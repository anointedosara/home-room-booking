import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import './Home.css';
import './Rooms.css';
import './Details.css';
import FeatureOne from './pages/FeatureOne';
import FeatureThree from './pages/FeatureThree';
import FeatureTwo from './pages/FeatureTwo';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/rooms">
                <Rooms />
              </Route>
              <Route exact path="/feature1">
                <FeatureOne />
              </Route>
              <Route exact path="/feature2">
                <FeatureTwo />
              </Route>
              <Route exact path="/feature3">
                <FeatureThree />
              </Route>
            </Switch>
          </div>
          <Footer />
    </div>
    </Router>
  );
}

export default App;
