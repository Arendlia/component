import React, { useState } from "react";
import { Menu } from "burger-menu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignRight, faHouse, faUser, faHeart, faDisplay, faQuestion, faToggleOff } from '@fortawesome/free-solid-svg-icons'
import SwitchButton from './../buttons/switch_button'
import 'burger-menu/lib/index.css';
import './burger.scss'

function Burger()  {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className='burger' onClick={() => setIsOpen(!isOpen)}><FontAwesomeIcon icon={faAlignRight} /></div>
      <Menu className="burger-menu" isOpen={isOpen} selectedKey={'entry'} onClose={() => setIsOpen(false)}>
        <a className="menu-item d-block my-4 text-start ms-5" href="#">
          <FontAwesomeIcon icon={faHouse} className='me-3 primary-color'/>
          Accueil
        </a>
        <a className="menu-item d-block my-4 text-start ms-5" href="#">
        <FontAwesomeIcon icon={faUser} className='me-3 primary-color'/>
          Mon Compte
        </a>
        <a className="menu-item d-block my-4 text-start ms-5" href="#">
        <FontAwesomeIcon icon={faHeart} className='me-3 primary-color'/>
          Mes Produits
        </a>
        <a className="menu-item d-block my-4 text-start ms-5" href="#">
        <FontAwesomeIcon icon={faDisplay} className='me-3 primary-color'/>
          Nos applications
        </a>
        <a className="menu-item d-block my-4 text-start ms-5" href="#">
        <FontAwesomeIcon icon={faQuestion} className='me-3 primary-color'/>
          Support
        </a>
        <a className="menu-item d-block my-4 text-start ms-5" href="#">
        <FontAwesomeIcon icon={faToggleOff} className='me-3 primary-color'/>
            Themes
          <span className=" d-block mt-3"><SwitchButton/></span>
        </a>
      </Menu>
    </>
);}
export default Burger;
