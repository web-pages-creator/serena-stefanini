import React from 'react';
import SerenaTitleAnimated from './SerenaTitleAnimated';
import './styles/LargeTop.css'
import Navbar from './Navbar';

function LargeTop(props) {
  return (
    <div className='LargeTop'>
       <SerenaTitleAnimated styl={{width: "15vw"}}/>
       <Navbar onClicked={(id) => props.onClicked(id)} />
    </div>
  );
}

export default LargeTop;
