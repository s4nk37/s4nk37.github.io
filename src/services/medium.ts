export interface Article {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    url: string;
    tags: string[];
}

const MEDIUM_RSS_URL = 'https://medium.com/feed/@s4nk37';
const CORS_PROXY = 'https://api.allorigins.win/raw?url=';

export const fetchMediumArticles = async (): Promise<Article[]> => {
    try {
        // Use CORS proxy to fetch the RSS feed
        const response = await fetch(CORS_PROXY + encodeURIComponent(MEDIUM_RSS_URL));
        const xmlText = await response.text();

        // Parse XML
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');

        // Get all items
        const items = xmlDoc.querySelectorAll('item');

        return Array.from(items).map((item) => {
            // Extract title (emojis preserved!)
            const title = item.querySelector('title')?.textContent || '';

            // Extract link
            const link = item.querySelector('link')?.textContent || '';

            // Extract pubDate and format it
            const pubDateStr = item.querySelector('pubDate')?.textContent || '';
            const date = new Date(pubDateStr);
            const formattedDate = date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });

            // Extract content first (Medium puts everything in content:encoded, not description)
            const contentNode = item.querySelector('content\\:encoded, encoded');
            const contentEncoded = contentNode?.innerHTML || contentNode?.textContent || '';

            // Parse HTML content to get plain text
            const contentDiv = document.createElement('div');
            contentDiv.innerHTML = contentEncoded;
            const fullText = contentDiv.textContent || contentDiv.innerText || '';

            // Create excerpt from content
            const excerpt = fullText.trim().slice(0, 150) + '...';

            // Calculate read time
            const wordCount = fullText.split(/\s+/).filter(word => word.length > 0).length;
            const readTimeMinutes = Math.max(1, Math.ceil(wordCount / 200));

            // Extract categories/tags
            const categories = Array.from(item.querySelectorAll('category')).map(cat => {
                const tag = cat.textContent || '';
                return tag.charAt(0).toUpperCase() + tag.slice(1);
            });

            return {
                title: title,
                excerpt: excerpt,
                date: formattedDate,
                readTime: `${readTimeMinutes} min read`,
                url: link,
                tags: categories
            };
        });
    } catch (error) {
        console.error('Error fetching Medium articles:', error);
        return [];
    }
};
