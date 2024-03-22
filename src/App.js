import {Routes, Route, useLocation} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './containers/Home'
import Foods from './containers/Foods'
import Contact from './containers/Contact'

import './App.css';
import Quote from './containers/Quote';
import Resturants from './containers/Resturants';

function App() {
  const location = useLocation()
  console.log(location);
  const renderParticlesInHomePage = location.pathname === "/"


  return (
    <div className="App">
         {
          renderParticlesInHomePage
         }
      <Navbar />
      
      <div className='App__main-page-container'>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/Quote' element={<Quote />} />
          <Route path='/Resturants' element={<Resturants />} />
          <Route path='/Foods' element={<Foods />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
