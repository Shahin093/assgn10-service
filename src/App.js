import logo from './logo.svg';
import './App.css';
import Heading from './Page/Heading/Heading';
import Slider from './Page/Slider/Slider';
import { Route, Routes } from 'react-router-dom';
import Login from './Page/Login/Login';
import Services from './Page/Services/Services';
import Footer from './Page/Footer/Footer';
import Register from './Page/Register/Register';

function App() {
  return (
    <div className="App">
      <Heading></Heading>
      {/* <Slider></Slider> */}
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Slider></Slider>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
}

export default App;
