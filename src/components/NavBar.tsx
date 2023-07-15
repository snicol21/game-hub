import { Link } from 'react-router-dom';
import { Box, HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBar = () => {
  return (
    <HStack padding='10px'>
      <Box as={Link} to='/' display='inline-block'>
        <Box boxSize='60px'>
          <Image src={logo} alt='Image' boxSize='100%' objectFit='cover' />
        </Box>
      </Box>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
