import Mid from './component/Mid';
// import Hp from './component/Hp';
// import './App.css';
// import Watch from './component/Watch';
import Main from './component/Main';
// import Shipp from './component/Shipping';
import Wbanner from './component/Wbanner';
import Sbanner from './component/Sbanner';
import EBbanner from './component/EBbanner';
import Ebanner from './component/Ebanner';
import Hbanner from './component/Hbanner';
import Bestsell from './component/Bestseller';
import Bigdeal from './component/Big-deal';
import Bestp from './component/Best-p';
import About from './component/A-section';
import Footer from './component/Footer';
import Addtocart from './component/Add-to-cart';
import Headphone from './component/Headphone';
import Shiping from "./component/Shiping"
import Shipping from "./component/Shipping"
import Contact from './component/Contact';
import Buds from "./component/wireless-buds"
import Order from "./component/Order"
import Navbar from "./component/Navbar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  
  return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={
              <>
               <Navbar/>
              <Main/>
              <Mid/>
              {/* <Shipp/> */}
              {/* <Hp/> */}
              <Hbanner/>
              <Bigdeal/>
              {/* <Ebanner/> */}
              <Bestsell/>
              <EBbanner/>
              <Bestp/>
              {/* <Wbanner/> */}
              {/* <Sbanner/> */}
              {/* <Watch/> */}
              <About/>
        
              <Footer/>
             
              </>
            } />
            <Route path="/about" element={
              <>
              <Mid/>
              </>
            } />
            <Route path="/blog" element={
              <>
              <Hbanner/>
              </>
            } />
              <Route path="/add-to-cart" element={
              <>
               <Navbar/>
              <Addtocart/>
              </>
            } />

             <Route path="/secondpage" element={
              <>
                 <Navbar />
              <Headphone/>
              </>
            } />
               <Route path="/billingpage" element={
              <>
                <Navbar />
              <Shiping/>
              </>
            } />
            
             <Route path="/contactpage" element={
              <>
              <Navbar />
              <Contact/>
              </>
            } />
             <Route path="/shippingpage" element={
              <>
                <Navbar />
              <Shipping/>
              </>
            } />
            
               <Route path="/buds" element={
              <>
                <Navbar />
              <Buds />
              </>
            } />
             <Route path="/order" element={
              <>
                <Navbar />
              < Order/>
              </>
            } />
          </Routes>
          
        </div>
      </Router>
  );
}

export default App;
