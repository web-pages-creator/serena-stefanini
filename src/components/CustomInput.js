import React from 'react';
import './styles/CustomInput.css'
import { Input, Textarea } from '@chakra-ui/react';

function CustomInput(props) {
  return (
    <div className='CustomInput'>
      <div className='wrap'>
        <div className='text'>{props.title}</div>
        { props.type == 'input' && <Input focusBorderColor='black' className='inputC' placeholder={props.title} /> }
        { props.type == 'textarea' && <Textarea focusBorderColor='black' className='inputC' placeholder={props.title} /> }
      </div>
    </div>
  );
}

export default CustomInput;
