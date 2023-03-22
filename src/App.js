import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Main from "./pages/Main";
import Navbar from "./components/Navbar";
import Jokes from './pages/Jokes';
import Test from './components/test'
import News from './pages/news';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/main" element={<Main />} />
            <Route path="/jokes" element={<Jokes />}/>
            <Route path="quotes" element={<Test />}/>
            <Route path="/news" element={<News /> }/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
