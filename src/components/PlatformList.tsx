import { ReactElement } from 'react';
import { HStack, Tooltip } from '@chakra-ui/react';
import { PlatformRoot } from '../types';
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaAppStoreIos,
  FaAndroid,
  FaApple,
  FaLinux
} from 'react-icons/fa';

import { SiNintendo } from 'react-icons/si';

interface Props {
  platforms: PlatformRoot[];
}

interface PlatformIcons {
  [key: string]: ReactElement;
}

const icons: PlatformIcons = {
  pc: <FaWindows />,
  playstation: <FaPlaystation />,
  xbox: <FaXbox />,
  ios: <FaAppStoreIos />,
  android: <FaAndroid />,
  mac: <FaApple />,
  linux: <FaLinux />,
  nintendo: <SiNintendo />
};

const PlatformList = ({ platforms }: Props) => {
  if (!platforms) return;

  return (
    <HStack>
      {platforms.map(({ platform }) => (
        <Tooltip key={platform.id} label={platform.name} fontSize='md'>
          <span> {icons[platform.slug]}</span>
        </Tooltip>
      ))}
    </HStack>
  );
};

export default PlatformList;
