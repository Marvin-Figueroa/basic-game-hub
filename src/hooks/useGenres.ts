import { useEffect, useState } from 'react';
import genreService, { Genre } from '../services/genreService';
import { APIResponse } from '../types';
import { AxiosError } from 'axios';

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = genreService.getAll<APIResponse<Genre>>();

    request
      .then(({ data }) => setGenres(data.results))
      .catch((error: AxiosError) => setError(error.message))
      .finally(() => setLoading(false));

    return () => cancel();
  }, []);

  return { genres, loading, error };
};

export default useGenres;
