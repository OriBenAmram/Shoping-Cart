import { Routes, Route } from 'react-router-dom';

// CMPS
import { Home } from './pages/home';
import { Store } from './pages/store';
import { About } from './pages/about';
import { AppHeader } from './cmps/app-header';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
