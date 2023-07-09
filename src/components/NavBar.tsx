import {
  Container,
  FormControl,
  FormLabel,
  Stack,
  Switch,
  useColorMode
} from '@chakra-ui/react';
import Logo from './Logo';
import SearchBar from './SearchBar';

interface Props {
  onSearch: (value: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <nav>
      <Container minW='full' padding='3'>
        <Stack
          margin='auto'
          width='full'
          maxW='8xl'
          direction='row'
          alignItems='center'
          justifyContent='space-between'>
          <Logo />
          <SearchBar onSearch={onSearch} placeholder='Search games...' />
          <FormControl w='auto' display='inline-flex' alignItems='center'>
            <Switch
              id='dark-mode'
              colorScheme='purple'
              onChange={toggleColorMode}
            />
            <FormLabel
              whiteSpace='nowrap'
              fontWeight='normal'
              htmlFor='dark-mode'
              mb='0'
              ml='3'>
              {colorMode === 'light' ? 'Dark' : 'Light'} Mode
            </FormLabel>
          </FormControl>
        </Stack>
      </Container>
    </nav>
  );
};

export default NavBar;
