import Navbar from "./Navbar";
import logo from '../assets/logo.svg'
const App = () => {
  return (
    <header>
      <div className="nav-area">
        <a href="/#" className="logo">
          <img src={logo} alt="Logo" className="nav--logo" />    
        </a>
        <Navbar />
      </div>
    </header>
  );
};

export default App;
