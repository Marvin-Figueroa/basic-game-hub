import { Image } from '@chakra-ui/react';
import logo from '../../public/video-games.png';

const Logo = () => {
  return <Image boxSize='50px' objectFit='cover' src={logo} alt='Logo' />;
};

export default Logo;
