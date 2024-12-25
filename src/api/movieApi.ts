export async function searchMovies(query: string) {
  const API_URL = `https://slimshadow-4links-scraper-api.hf.space/scrape?url=https://www.4links.click/?s=${encodeURIComponent(query)}`;
  
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    
    if ('results' in data && data.results) {
      return data.results;
    }
    return null;
  } catch (error) {
    throw new Error('Failed to fetch movies');
  }
}