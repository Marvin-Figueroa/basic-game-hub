import { Text, Box, VStack, Image } from '@chakra-ui/react';
import { Genre } from '../services/genreService';

interface Props {
  selectedGenre: Genre | null;
  onSelect: (genre: Genre) => void;
  genres: Genre[];
}

const GenreList = ({ genres, selectedGenre, onSelect }: Props) => {
  return (
    <VStack spacing={4} align='stretch'>
      {genres.map((genre) => (
        <Box key={genre.id} h='50px' display='flex' alignItems='center' gap='3'>
          <Image
            border={genre.name === selectedGenre?.name ? '2px' : 'none'}
            borderColor={
              genre.name === selectedGenre?.name ? 'purple.600' : 'none'
            }
            borderRadius='lg'
            boxSize='50px'
            objectFit='cover'
            src={genre.image_background}
            alt={genre.name}
          />
          <Text
            cursor='pointer'
            onClick={() => onSelect(genre)}
            color={
              genre.name === selectedGenre?.name ? 'purple.600' : 'currentcolor'
            }
            fontWeight={genre.name === selectedGenre?.name ? 'bold' : 'normal'}>
            {genre.name}
          </Text>
        </Box>
      ))}
    </VStack>
  );
};

export default GenreList;
