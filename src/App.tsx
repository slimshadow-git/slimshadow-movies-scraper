import React from 'react';
import { Film } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { MovieCard } from './components/MovieCard';
import { ThemeToggle } from './components/ThemeToggle';
import { LoadingSpinner } from './components/LoadingSpinner';
import { useMovieSearch } from './hooks/useMovieSearch';

export default function App() {
  const { results, isLoading, error, handleSearch } = useMovieSearch();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>
        
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center mb-4">
            <Film size={32} className="text-blue-600 dark:text-blue-400 sm:size-40" />
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Slimshadow scraper
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Search for your favorite movies and find download links
          </p>
        </div>

        <div className="flex justify-center mb-8 sm:mb-12">
          <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        </div>

        {isLoading && !results && (
          <div className="flex flex-col items-center justify-center py-12">
            <LoadingSpinner size="lg" className="mb-4" />
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              Searching for movies...
            </p>
          </div>
        )}

        {error && (
          <div className="text-center text-sm sm:text-base text-red-600 dark:text-red-400 mb-6 sm:mb-8">
            {error}
          </div>
        )}

        {results && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {results.map((movie, index) => (
              <MovieCard
                key={index}
                title={movie.title}
                link={movie.link}
                links={movie.links}
              />
            ))}
          </div>
        )}

        {!results && !error && !isLoading && (
          <div className="text-center text-sm sm:text-base text-gray-500 dark:text-gray-400">
            Enter a movie name to start searching
          </div>
        )}
      </div>
    </div>
  );
}