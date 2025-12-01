const MEDIUM_RSS_URL = 'https://medium.com/feed/@s4nk37';
const RSS2JSON_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(MEDIUM_RSS_URL)}`;

async function fetchTitles() {
    try {
        const response = await fetch(RSS2JSON_URL);
        const data = await response.json();
        if (data.status === 'ok') {
            data.items.forEach(item => {
                console.log(`Title: ${item.title}`);
                // Print code points for the first few characters
                for (let i = 0; i < Math.min(item.title.length, 5); i++) {
                    console.log(`Char ${i}: ${item.title.charCodeAt(i)} (0x${item.title.charCodeAt(i).toString(16)})`);
                }
            });
        } else {
            console.log('Error: Status not ok');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchTitles();
