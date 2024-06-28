// test/astroApiTest.js

module.exports = {
    '@tags': ['astro', 'api'],
  
    'Test if API data is displayed in Astro component': function (browser) {
      browser.url('http://localhost:4321'); // Replace with your Astro project URL
  
      // Wait for the Astro component to load (replace 'astro-component' with your actual component ID or class)
      browser.waitForElementVisible('body', 5000, function () {
        // Simulate an action (e.g., clicking a button that triggers API request)
        browser.click('.trigger-api-button');
  
        // Wait for the API response data to appear in the component
        browser.waitForElementVisible('.api-response-data', 5000, function () {
          // Assert that the API response data is present and contains expected content
          browser.expect.element('.api-response-data').text.to.contain('Expected API Data');
          
          // End the test
          browser.end();
        });
      });
    },
  };
  