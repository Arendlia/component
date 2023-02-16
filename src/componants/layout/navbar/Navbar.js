import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHeart, faDisplay, faQuestion, faToggleOff } from '@fortawesome/free-solid-svg-icons'
import Burger from './../../burger/burger'
import SwitchButton from './../../buttons/switch_button'
import './navbar.scss';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg shadow">


  <a className="navbar-brand d-lg-none" href="#">
    <img className='dark-logo' src='/assets/logo-mobile-dark.png'/>
    <img className='light-logo' src='/assets/logo-mobile-light.png'/>
  </a>
  <div className='phone-menu'>
    <Burger/>
  </div>
  


  <div className="collapse navbar-collapse justify-content-between px-3" id="navbarToggle">

    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#">Mon Compte</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Mes Appareils</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Support</a>
      </li>
    </ul>
    
    

    <a className="navbar-brand d-none d-lg-block mx-auto" href="#">
      <img className='w-25 dark-logo' src='/assets/logo_main.png'/>
      <img className='w-25 light-logo' src='/assets/logo_main_light.png'/>
    </a>
    
    
    <div className="navbar-nav">
      <div className="nav-item my-auto mx-auto">
        <SwitchButton/>
        <p className='secondary-color'>Theme</p>
      </div>
    </div>
   
  </div>
</nav>



  );
}

export default Navbar;