import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar.js'
import Banner from './components/Banner.js'
import Footer from './components/Footer.js'
import Body from './components/Body.js'
import image from './image/Image1.png'

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
    <Banner title="Donate" subtitle="Making a donation for nature" text="When you donate, you’re supporting effective solutions to big environmental challenges—an investment in the future of our planet." image={image}/>
    <Body/>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
