import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import './styles/Contatti.css'
import CustomInput from '../components/CustomInput';
import { Textarea } from '@chakra-ui/react'
import CustomButton from '../components/CustomButton';
import { HiPaperAirplane } from "react-icons/hi";
import Title from '../components/Title';

function Contatti() {

  const Icon = () => {
    return <HiPaperAirplane style={{transform: 'rotate(90deg)'}}/>;
  };

  return (
    <div className='Contatti'>
      <Title text='Contattami'/>
      <div className='form'>
        <CustomInput type='input' title='Nome e Cognome'/>
        <CustomInput type='input' title='Email'/>
        <CustomInput type='input' title='Oggetto del messaggio'/>
        <CustomInput type='textarea' title='Corpo del messaggio'/>
        <CustomButton text='Invia' icon={Icon}/>
      </div>
    </div>
  );
}

export default Contatti;
