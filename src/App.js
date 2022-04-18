import './App.css';
import Heading from './Page/Heading/Heading';
import { Route, Routes } from 'react-router-dom';
import Login from './Page/Login/Login';
import Footer from './Page/Footer/Footer';
import Register from './Page/Register/Register';
import Checkout from './Page/Checkout/Checkout';
import RequiredAuth from './Page/RequiredAuth/RequiredAuth';
import ServiceDetail from './Page/ServiceDetail/ServiceDetail';
import Home from './Page/Home/Home';

function App() {
  return (
    <div className="App">
      <Heading></Heading>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={
          <RequiredAuth>
            <Checkout></Checkout>
          </RequiredAuth>
        }></Route>
        {/* <Route path='/service/:serviceId'element={<ServiceDetail></ServiceDetail>} ></Route> */}
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
