import React from 'react';
import { ExternalLink } from 'lucide-react';

interface MovieCardProps {
  title: string;
  link: string;
  links?: string[];
}

export function MovieCard({ title, link, links = [] }: MovieCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-3 break-words">{title}</h2>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-sm sm:text-base text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
      >
        <ExternalLink size={16} className="mr-1 flex-shrink-0" />
        View Details
      </a>
      
      {links.length > 0 && (
        <div className="mt-3">
          <h3 className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Additional Links:</h3>
          <div className="space-y-2">
            {links.map((link, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 break-words"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}