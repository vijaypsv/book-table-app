import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Reservations from './pages/Reservations';
import Order from './pages/Order';
import Login from './pages/Login';
import Confirmation from './pages/Confirmation';

 const Main = () => {
   return <main id="content">
            <Routes>
              <Route path="/" element= {
              <Home />
              } />

              <Route path="/about" element={
              <About />
              } />

              <Route path="/menu" element={
              <Menu />
              } />

              <Route path="/reservations" element= {
              <Reservations />
              } />

              <Route path="/order" element= {
              <Order />
              } />

              <Route path="/login" element= {
              <Login />
              } />

              <Route path="/confirmation"  element= {
              <Confirmation />
              } />
          </Routes>
        </main>
 };

 export default Main;