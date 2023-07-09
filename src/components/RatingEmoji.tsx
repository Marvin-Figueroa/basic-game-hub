import { Tooltip } from '@chakra-ui/react';

interface Props {
  rating: number;
}

interface RatingEmojies {
  [key: number]: { label: string; emoji: string };
}

const ratings: RatingEmojies = {
  1: { label: 'skip', emoji: '🤮' },
  3: { label: 'meh', emoji: '😑' },
  4: { label: 'recomended', emoji: '👍' },
  5: { label: 'exceptional', emoji: '🎯' }
};

const RatingEmoji = ({ rating }: Props) => {
  if (!rating) return;

  return (
    <Tooltip label={ratings[rating].label} fontSize='md'>
      <span>{ratings[rating].emoji}</span>
    </Tooltip>
  );
};

export default RatingEmoji;
