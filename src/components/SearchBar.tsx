import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FaMagnifyingGlass } from 'react-icons/fa6';

interface Props {
  placeholder: string;
  onSearch: (value: string) => void;
}

const SearchBar = ({ placeholder, onSearch }: Props) => {
  return (
    <InputGroup maxW='2xl'>
      <InputLeftElement color='purple.700' pointerEvents='none'>
        <FaMagnifyingGlass />
      </InputLeftElement>
      <Input
        colorScheme='purple'
        focusBorderColor='purple.600'
        fontSize='lg'
        borderRadius='full'
        type='search'
        placeholder={placeholder}
        color='purple.600'
        onChange={(e) => onSearch(e.target.value)}
      />
    </InputGroup>
  );
};

export default SearchBar;
