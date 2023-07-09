import { useEffect, useState } from 'react';
import gameService, { Game } from '../services/gameService';
import { APIResponse, RequestParams } from '../types';
import { AxiosError } from 'axios';

const useGames = (params?: RequestParams) => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const paramsJSONString = JSON.stringify(params);

  useEffect(() => {
    console.log('params changed...make another request ', params);

    setLoading(true);
    const { request, cancel } = gameService.getAll<APIResponse<Game>>(params);

    request
      .then(({ data }) => setGames(data.results))
      .catch((error: AxiosError) => setError(error.message))
      .finally(() => setLoading(false));

    return () => cancel();
  }, [paramsJSONString]);

  return { games, loading, error };
};

export default useGames;
