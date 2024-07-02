import React from 'react';
import './styles/CustomButton.css'

function CustomButton(props) {
  return (
    <div className='CustomButton' onClick={() => props.callback()}>
      <div className='textButton'>{props.text}</div>
      {props.icon && <props.icon />}
    </div>
  );
}

export default CustomButton;
