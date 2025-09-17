const fs = require('fs');
const cheerio = require('cheerio');

// Path to your HTML file
const filePath = '';

// Read the HTML file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Load the HTML content into Cheerio
  const $ = cheerio.load(data);

  // Select all elements with the class "e" and wrap them in a <div class="b">
    $("#testing").wrap('<div class="b"></div>');

  // Get the modified HTML
  const modifiedHtml = $.html();

  // Write the modified HTML back to the file
  fs.writeFile(filePath, modifiedHtml, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to the file:', err);
      return;
    }
    console.log('HTML file successfully updated!');
  });
});