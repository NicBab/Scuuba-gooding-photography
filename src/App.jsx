import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Shop, Contact, Bio, Cart } from './pages/index'
import { Header, Footer } from './components/index'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/contact" component={Contact} />
          <Route path="/bio" component={Bio} />
          <Route paht="/cart" component={Cart} />
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
