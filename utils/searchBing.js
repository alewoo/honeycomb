const axios = require('axios');

const searchBing = async (formattedTopic) => {
    const apiKey = 'YOUR_BING_API_KEY'; // Replace with your Bing Search API key
    const endpoint = 'https://api.bing.microsoft.com/v7.0/search';

    try {
        const response = await axios.get(endpoint, {
            params: {
                q: formattedTopic,
                count: 1, // Get only the top result
                textDecorations: true,
                textFormat: 'HTML'
            },
            headers: {
                'Ocp-Apim-Subscription-Key': apiKey
            }
        });

        const topResult = response.data.webPages.value[0];
        if (topResult) {
            console.log(`Top blog for "${formattedTopic}":`);
            console.log(`Title: ${topResult.name}`);
            console.log(`URL: ${topResult.url}`);
            console.log(`Snippet: ${topResult.snippet}`);
        } else {
            console.log(`No results found for "${formattedTopic}".`);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Usage example
const formattedTopic = 'Web Development'; // Replace with your topic of interest
searchBing(formattedTopic);
