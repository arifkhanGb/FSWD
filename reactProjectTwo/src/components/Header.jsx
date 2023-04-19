import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  VStack,
  HStack,
  useDisclosure,
} from '@chakra-ui/react';

import {Link} from 'react-router-dom';
import {BiMenuAltLeft} from 'react-icons/bi';

function Header() {


    const {isOpen, onOpen, onClose} = useDisclosure();

  return <>

    <Button
    zIndex={'overlay'}
    pos={'fixed'}
    top={'4'}
    left={'4'}
    colorScheme="purple"
    p={'0'}
    w={'10'}
    h={'10'}
    borderRadius={'full'}
    onClick={onOpen}

    >
        <BiMenuAltLeft size={'30'}/>
    </Button>

    <Drawer isOpen ={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay />

        <DrawerContent>
            
            <DrawerCloseButton />

            <DrawerHeader>VIDEO WORLD</DrawerHeader>
            <DrawerBody>
                <VStack alignItems={'flex-start'}>
                    <Button onClick ={onClose} variant ={'ghost'} colorScheme={'purple'}>
                        <Link to = {"/"}>HOME</Link>
                    </Button>

                    <Button onClick ={onClose} variant ={'ghost'} colorScheme={'purple'}>
                        <Link to = {'/videos'}>Vidios</Link>
                    </Button>

                    <Button onClick ={onClose} variant ={'ghost'} colorScheme={'purple'}>
                        <Link to = {'/videos?category=free'}>Free videos</Link>
                    </Button>

                    <Button onClick ={onClose} variant ={'ghost'} colorScheme={'purple'}>
                        <Link to = {'/upload'}>Upload Videos</Link>
                    </Button>
                </VStack>

                <HStack pos={'absolute'} bottom={'10'} left={'0'}>
                    <Button onClick ={onClose} colorScheme={'purple'} >
                        <Link to={'/login'}>Log in</Link>
                    </Button>

                    <Button onClick ={onClose} colorScheme={'purple'} variant={'outline'} >
                        <Link to={'/signUp'}>Sign Up</Link>
                    </Button>
                </HStack>
            </DrawerBody>
        </DrawerContent>
        
    </Drawer>

  
  
  </>;
}

export default Header;
