import React from 'react';
import { Button, Input, useDisclosure } from '@chakra-ui/react';
import { Drawer, DrawerOverlay, DrawerContent, DrawerBody, DrawerFooter, DrawerHeader, DrawerCloseButton } from '@chakra-ui/react';
import SerenaTitleAnimated from './SerenaTitleAnimated';
import './styles/SmallTop.css'
import { HiMenuAlt3 } from "react-icons/hi";
import { sections } from '../metadata/sections';
import { useRef } from 'react';

function SmallTop(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <div className='SmallTop'>
       <SerenaTitleAnimated styl={{width: "40vw"}}/>
       <HiMenuAlt3 ref={btnRef} className='hamburger' onClick={onOpen}/>
       <Drawer
        isOpen={isOpen}
        placement='right'
        size='full'
        onClose={onClose}
        finalFocusRef={btnRef}
        >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton/>
          <DrawerHeader><SerenaTitleAnimated styl={{width: "50vw"}}/></DrawerHeader>

          <DrawerBody className='body'>
            {sections.map(sec => <div key={sec.name} className='navbarItem' onClick={() => { props.onClicked(sec.id); onClose()}}>{sec.name}</div>)}
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default SmallTop;
