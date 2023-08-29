
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Navbar from './Components/NavBar';
import Home from './Pages/Home';
import Aboutus from './Pages/Aboutus';
import Categories from './Pages/Categories';

import Services from './Pages/Services';
import Cilents from './Pages/Cilents';
import Contact from './Pages/Contact Us';
import Fotter from './Components/Fotter';
//import LandingPage from './Components/LandingPage';



export default function App(){
  return(
      <>
          <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route path = "Home" element={<Home/>}/>
        <Route path = "Aboutus" element={<Aboutus/>}/>
        <Route path = "Categories" element={<Categories/>}/>
        
        <Route path = "Services" element={<Services/>}/>
        <Route path = "Cilents" element={<Cilents/>}/>
        <Route path = "Contact Us" element={<Contact Us/>}/>

        
        {/* <Route exact path="/" component={<LandingPage/>} />
        <Route path="/Contact" component={<Contact/>} />
       */}
       
       
      </Routes>
      </BrowserRouter>
      <Fotter/>
      </>
  )
}