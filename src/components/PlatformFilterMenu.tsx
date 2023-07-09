import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa6';
import { Platform } from '../types';

interface Props {
  placeholder?: Platform | null;
  platforms: Platform[];
  onChange: (platform: Platform) => void;
}

const PlatformFilterMenu = ({ platforms, onChange, placeholder }: Props) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        {placeholder?.name}
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem key={platform.id} onClick={() => onChange(platform)}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformFilterMenu;
