const fs = require('fs');
const cheerio = require('cheerio');

// Path to your HTML file
const filePath = 'templates/blog/post/2025/09-27.html';

// Read the HTML file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Where the fuck am I:', err);
    return;
  }

  // Load the HTML content into Cheerio
  const $ = cheerio.load(data);

  // Why is Node js like this
  
    $('pre').each(function () {
    $(this).text($(this).html());
  });

  // Get the modified HTML
  const modifiedHtml = $.html();

  // Write the modified HTML back to the file
  fs.writeFile(filePath, modifiedHtml, 'utf8', (err) => {
    if (err) {
      console.error('Ah fuck:', err);
      return;
    }
    console.log("What's done is done. Done, done, done.");
  });
});