import './App.css';
import { Route, Switch } from 'react-router-dom';

import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Home from './pages/Home';
import Recipes from './pages/Recipes';

import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/recipe" component={Recipes} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact-us" component={Contact} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
