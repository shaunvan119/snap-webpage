import logo from '../assets/logo.svg'


export default function Navbar() {
    return (
    <nav className="nav-bar">   
         <img src={logo} alt="Logo" className="nav--logo" />      
    </nav>
    )
}