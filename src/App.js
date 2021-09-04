
import { Home } from './components/Home'
import { AboutPage } from './components/AboutPage'
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={AboutPage} />
      </Switch>
    </HashRouter>
      
      
  );
}

export default App;
