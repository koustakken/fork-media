import { Routes, Route } from 'react-router-dom';
//components
import Header from './components/Header';
//pages
import Home from './pages/home';
import Page404 from './pages/Page404';
//scss
import './scss/app.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
