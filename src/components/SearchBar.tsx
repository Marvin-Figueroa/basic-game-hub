import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FaMagnifyingGlass } from 'react-icons/fa6';

interface Props {
  placeholder: string;
}

const SearchBar = ({ placeholder }: Props) => {
  return (
    <InputGroup maxW='2xl'>
      <InputLeftElement color='whiteAlpha.800' pointerEvents='none'>
        <FaMagnifyingGlass />
      </InputLeftElement>
      <Input
        border='none'
        bg='gray.700'
        focusBorderColor='purple.600'
        fontSize='lg'
        borderRadius='full'
        type='search'
        placeholder={placeholder}
        color='whiteAlpha.800'
      />
    </InputGroup>
  );
};

export default SearchBar;
