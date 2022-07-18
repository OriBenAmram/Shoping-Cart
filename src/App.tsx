import { Routes, Route } from 'react-router-dom';

// CMPS
import { Home } from './pages/home';
import { Store } from './pages/store';
import { About } from './pages/about';
import { SideBar } from './cmps/sidebar';
import { AppHeader } from './cmps/app-header';
import { ShoppingCartProvider } from './context/shopping-cart-context';

function App() {
  return (

    <ShoppingCartProvider>
      <div className="App">
        <AppHeader />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <SideBar />
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
