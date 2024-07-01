import LargeTop from './LargeTop';
import SmallTop from './SmallTop';
import './styles/Top.css'
import { Show, Hide } from '@chakra-ui/react'

function Top(props) {
  return (
    <div className='Top'>
        <Show below='md'>
            <SmallTop onClicked={(id) => props.onClicked(id)}/>
        </Show>
        <Show above='md'>
            <LargeTop onClicked={(id) => props.onClicked(id)}/>
        </Show>
    </div>
  );
}

export default Top;
