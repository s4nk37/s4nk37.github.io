async function testRSS() {
    try {
        const response = await fetch('https://medium.com/feed/@s4nk37');
        console.log('Response status:', response.status);
        const xmlText = await response.text();
        console.log('XML length:', xmlText.length);
        console.log('First 500 chars:', xmlText.substring(0, 500));

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');

        const items = xmlDoc.querySelectorAll('item');
        console.log('Number of items:', items.length);

        if (items.length > 0) {
            const firstItem = items[0];
            console.log('First title:', firstItem.querySelector('title')?.textContent);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

testRSS();
