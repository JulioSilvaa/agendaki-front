import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
