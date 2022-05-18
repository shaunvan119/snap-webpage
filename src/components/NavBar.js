import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";
import logo from '../assets/logo.svg'

export default function Navbar() {
  return (
    
    <nav className="nav-area" >
        <a href="/#" className="logo">
          <img src={logo} alt="Logo" className="nav--logo" />    
        </a>
      <ul className="menus">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>  
  )
}