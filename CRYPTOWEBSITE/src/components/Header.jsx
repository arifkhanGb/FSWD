import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <HStack  className={'header'} >

    <Button variant={"unstyled"} color={"white"}>
        <Link to="/" >Home</Link>
    </Button>

    <Button  Color={"white"}>
        <Link to="/exchanges" >Exchanges</Link>
    </Button>

    <Button variant={"unstyled"} color={"white"}>
        <Link to="/coins" >Coin</Link>
    </Button>

    <Button variant={"unstyled"} color={"white"}>
        <Link to="/Converter" >Currency Converter</Link>
    </Button>

   </HStack>
  )
}

export default Header