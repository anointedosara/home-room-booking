import { Route, Switch } from 'react-router-dom';
import './App.css';
import './Home.css';
import './Rooms.css';
import './Details.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import ScrollToTop from './Components/ScrollToTop';
import RoomDetails from './pages/roomDetails';

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <div className="content">
            <Switch>
              <Route exact path="/"><Home /></Route>
              <Route exact path="/rooms"><Rooms /></Route>
              <Route exact path="/rooms/:name"><RoomDetails /></Route>
            </Switch>
          </div>
          <Footer />
      </div>
    </>
  );
}

export default App;
