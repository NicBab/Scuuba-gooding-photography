import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Gallery, Shop, Contact, Bio } from './pages/index'
import { Header, Footer } from './components/index'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/shop" component={Shop} />
          <Route path="/bio" component={Bio} />
          <Route path="/contact" component={Contact} />
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
