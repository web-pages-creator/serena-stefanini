import React from 'react';
import './styles/Navbar.css'
import { sections } from '../metadata/sections';

function Navbar(props) {
  return (
    <div className='Navbar'>
      {sections.map(sec => <div className='navbarItem' onClick={() => props.onClicked(sec.id)}>{sec.name}</div>)}
    </div>
  );
}

export default Navbar;
