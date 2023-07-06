import {
  Container,
  FormControl,
  FormLabel,
  Stack,
  Switch
} from '@chakra-ui/react';
import Logo from './Logo';
import SearchBar from './SearchBar';

const NavBar = () => {
  return (
    <nav>
      <Container minW='full' padding='3' bg='gray.800'>
        <Stack
          margin='auto'
          width='full'
          maxW='8xl'
          direction='row'
          alignItems='center'
          justifyContent='space-between'>
          <Logo />
          <SearchBar placeholder='Search games...' />
          <FormControl w='auto' display='inline-flex' alignItems='center'>
            <Switch id='dark-mode' colorScheme='purple' />
            <FormLabel
              whiteSpace='nowrap'
              color='white'
              fontWeight='normal'
              htmlFor='dark-mode'
              mb='0'
              ml='3'>
              Dark Mode
            </FormLabel>
          </FormControl>
        </Stack>
      </Container>
    </nav>
  );
};

export default NavBar;
