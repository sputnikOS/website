// tests/astroAppTest.js

module.exports = {
  "Check if application is running": function (browser) {
    browser
      // Replace 'http://localhost:3000' with the actual URL of your Astro app
      .url("http://localhost:4321")
      .waitForElementVisible("body", 5000)
      .assert.title("(Cyber)Space Agency") // Adjust to match your app's title
      // Add additional assertions based on your app's behavior
      .end();
  },
};
