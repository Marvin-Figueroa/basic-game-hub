import {
  Box,
  ChakraProvider,
  HStack,
  Heading,
  VStack,
  useToast
} from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GenreList from './components/GenreList';
import GamesGrid from './components/GamesGrid';
import PlatformFilterMenu from './components/PlatformFilterMenu';
import { useState } from 'react';
import { useDebounce } from './hooks/useDebounce';
import useGenres from './hooks/useGenres';
import useGames from './hooks/useGames';
import { orderOptions, platforms } from './data/static';
import { Genre } from './services/genreService';
import { OrderOption, Platform } from './types';
import OrderMenu from './components/OrderMenu';

function App() {
  const [orderBy, setOrderBy] = useState<OrderOption | null>(orderOptions[0]);
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    platforms[0]
  );
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const { genres, error: errorGenres } = useGenres();
  const {
    games,
    loading: loadingGames,
    error: errorGames
  } = useGames({
    genres: [selectedGenre?.id],
    parent_platforms: [
      selectedPlatform?.id !== 0 ? selectedPlatform?.id : undefined
    ],
    search: debouncedSearchTerm,
    ordering: orderBy?.slug
  });

  const errorGamesToast = useToast();
  const errorGenresToast = useToast();

  const handlePlatformSelect = (platform: Platform) => {
    setSelectedPlatform(platform);
  };

  const handleOrderBy = (orderBy: OrderOption) => {
    setOrderBy(orderBy);
  };

  const handleSearch = (search: string) => {
    setSearchTerm(search);
  };

  const handleGenreSelect = (genre: Genre) => {
    setSelectedGenre(genre);
  };

  return (
    <ChakraProvider>
      <NavBar onSearch={handleSearch} />
      <HStack mt='5' alignItems='flex-start' p='8' gap='8'>
        <Box>
          <Heading size='lg' mt='3' mb='7' color='purple.600'>
            Genres
          </Heading>
          {errorGenres &&
            errorGenresToast({
              title: errorGenres,
              status: 'error',
              duration: 3000,
              isClosable: true
            })}
          <GenreList
            onSelect={handleGenreSelect}
            selectedGenre={selectedGenre}
            genres={genres}
          />
        </Box>
        <VStack flexGrow='1' alignItems='flex-start' gap='8'>
          <Heading size='2xl' color='purple.500'>
            {selectedGenre?.name}{' '}
            {selectedPlatform?.name === 'All Platforms'
              ? ''
              : selectedPlatform?.name}{' '}
            Games
          </Heading>
          <HStack spacing='4'>
            <PlatformFilterMenu
              platforms={platforms}
              placeholder={selectedPlatform}
              onChange={handlePlatformSelect}
            />
            <OrderMenu
              placeholder={orderBy}
              options={orderOptions}
              onChange={handleOrderBy}
            />
          </HStack>
          {errorGames &&
            errorGamesToast({
              title: errorGames,
              status: 'error',
              duration: 3000,
              isClosable: true
            })}
          <GamesGrid loadingGames={loadingGames} games={games} />
        </VStack>
      </HStack>
    </ChakraProvider>
  );
}

export default App;

