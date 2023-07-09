import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa6';
import { OrderOption } from '../types';

interface Props {
  placeholder?: OrderOption | null;
  options: OrderOption[];
  onChange: (selectedOption: OrderOption) => void;
}

const OrderMenu = ({ options, onChange, placeholder }: Props) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        Order by: {placeholder?.title}
      </MenuButton>
      <MenuList>
        {options.map((option) => (
          <MenuItem key={option.id} onClick={() => onChange(option)}>
            {option.title}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default OrderMenu;
