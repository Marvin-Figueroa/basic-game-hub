import {
  Card,
  CardBody,
  Heading,
  Image,
  HStack,
  Badge,
  Skeleton
} from '@chakra-ui/react';
import { Game } from '../services/gameService';
import PlatformList from './PlatformList';
import RatingEmoji from './RatingEmoji';
import placeholderImage from '../assets/no-image.jpg';

interface Props {
  game: Game;
  loadingGames: boolean;
}

const GameCard = ({ game, loadingGames }: Props) => {
  return (
    <Card
      maxW='300px'
      minH='370px'
      overflow='hidden'
      boxShadow='2xl'
      shadow='dark-lg'>
      <Skeleton isLoaded={!loadingGames}>
        <Image
          objectFit='cover'
          height='250px'
          src={game.background_image || placeholderImage}
          alt={game.name}
        />
      </Skeleton>

      <CardBody p='5'>
        <Skeleton isLoaded={!loadingGames}>
          <HStack display='flex' justifyContent='space-between' mb='6'>
            <PlatformList platforms={game.parent_platforms} />
            <Badge
              colorScheme={
                game.metacritic < 50
                  ? 'red'
                  : game.metacritic < 75
                  ? 'yellow'
                  : 'green'
              }>
              {game.metacritic}
            </Badge>
          </HStack>
        </Skeleton>
        <Skeleton isLoaded={!loadingGames}>
          <Heading size='md'>
            {game.name} {<RatingEmoji rating={game.rating_top} />}
          </Heading>
        </Skeleton>
      </CardBody>
    </Card>
  );
};

export default GameCard;
