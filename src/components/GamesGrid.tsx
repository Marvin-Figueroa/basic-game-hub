import { Game } from '../services/gameService';
import { Heading, SimpleGrid } from '@chakra-ui/react';
import GameCard from './GameCard';

type Props = {
  loadingGames: boolean;
  games: Game[];
};

const GamesGrid = ({ games, loadingGames }: Props) => {
  if (games.length === 0)
    return (
      <Heading size='xl' color='red.500'>
        No games were found! 🤔
      </Heading>
    );
  return (
    <SimpleGrid minChildWidth='200px' w='full' spacing='30px'>
      {games.map((game) => (
        <GameCard loadingGames={loadingGames} key={game.id} game={game} />
      ))}
    </SimpleGrid>
  );
};

export default GamesGrid;
