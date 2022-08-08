import { Routes, Route } from 'react-router-dom';
//components
import Header from './components/Header';
//pages
import Home from './pages/home';
import Articles from './pages/articles';
import Best from './pages/best';
import News from './pages/news';
import Club from './pages/club';
import Tests from './pages/tests';
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
          <Route path="/articles" element={<Articles />} />
          <Route path="/best" element={<Best />} />
          <Route path="/news" element={<News />} />
          <Route path="/club" element={<Club />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
