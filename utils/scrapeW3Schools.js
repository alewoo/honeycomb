const axios = require('axios');
const cheerio = require('cheerio');

// Function to scrape W3Schools for tutorials on a specific topic
const scrapeW3Schools = async (topic) => {
    try {
        // Replace spaces with '+' for URL encoding
        const formattedTopic = topic.split(' ').join('+');
        // const url = `https://www.w3schools.com/search/search.asp?q=${formattedTopic}`;
        const url = `https://www.w3schools.com/#gsc.tab=0&gsc.q=${formattedTopic}`;  
        // Fetch the HTML content of the page
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        // Array to store tutorial links and titles
        const tutorials = [];

        // Select tutorial entries
        $('div.gsc-webResult').each((index, element) => {
            const title = $(element).find('h3.gsc-webResult-title').text().trim();
            const link = $(element).find('a.gs-title').attr('href');
            if (title && link) {
                tutorials.push({
                    title,
                    link: link.startsWith('http') ? link : `https://www.w3schools.com${link}`
                });
            }
        });

        // Output the tutorials
        console.log(`Tutorials on "${topic}":`);
        tutorials.forEach((tutorial, index) => {
            console.log(`${index + 1}. ${tutorial.title}: ${tutorial.link}`);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Usage: Replace 'HTML' with your topic of interest
scrapeW3Schools('HTML');
