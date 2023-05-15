
import Home from './Page/Home';
import './App.css'
import Navbar from './Page/Navbar';
import Pan from './Page/Pan';
import Faq from './Page/Faq';
import Contact from './Page/Contact';
import Roadmap from './Page/Roadmap';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/> 
      <Pan/>
      <Roadmap/>
      <Faq/>
      <Contact/>
      
    </div>
  );
}

export default App;
