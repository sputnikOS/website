"Main heading is visible": function (browser) {
  browser
      .url("http://localhost:4321")
      .waitForElementVisible("h1", 5000)
      .assert.containsText("h1", "Welcome") // Adjust text as needed
      .end();
},

"Navigation bar is present": function (browser) {
  browser
      .url("http://localhost:4321")
      .waitForElementVisible("nav", 5000)
      .assert.visible("nav")
      .end();
}
};