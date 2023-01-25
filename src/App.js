import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar.js'
import Banner from './components/Banner.js'
import Footer from './components/Footer.js'
import Body from './components/Body.js'

const navItems = [
  { title: "Home", link: "/" },
  { title: "About us", link: "/" },
  { title: "What We Do", link: "/" },
  { title: "Media", link: "/" },
  { title: "Contact", link: "/" },
];

function App() {
  return (
    <BrowserRouter>
    <Navbar navItems={navItems} />
    <Banner/>
    <Body/>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
