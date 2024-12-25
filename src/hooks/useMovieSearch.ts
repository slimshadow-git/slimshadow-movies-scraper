import { useState } from 'react';
import { searchMovies } from '../api/movieApi';

interface MovieResult {
  title: string;
  link: string;
  links?: string[];
}

export function useMovieSearch() {
  const [results, setResults] = useState<MovieResult[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const data = await searchMovies(query);
      setResults(data);
      if (!data) {
        setError('No results found');
      }
    } catch (err) {
      setError('Failed to fetch movies. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return { results, isLoading, error, handleSearch };
}