import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import ShopItemsList from './components/ShopItemsList/ShopItemsList';

const App = () => (
  <div className="App">
    <Router>
      <Header />
      <ShopItemsList />
      <Routes />
    </Router>
  </div>
);

export default App;
