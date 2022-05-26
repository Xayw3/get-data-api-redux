import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import CurrencyPage from './Pages/CurrencyPage/CurrencyPage';
import CalculatorPage from './Pages/CalculatorPage/CalculatorPage';
import Header from './components/Header/Header';

const App = () => {
  console.log(1);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/currency/:name" element={<CurrencyPage />} />
      </Routes>
    </Router>
  );
};

export default App;
