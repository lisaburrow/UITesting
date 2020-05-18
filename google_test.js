const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

    const driver = new webdriver.Builder()
    //.forBrowser('firefox')
    .forBrowser('chrome')
    .build();


driver.get('http://www.google.com');

driver.findElement(By.name('q')).sendKeys('webdriver');

driver.sleep(10000).then(function() {
  driver.findElement(By.name('q')).sendKeys(webdriver.Key.TAB);
});

driver.findElement(By.name('btnK')).click();

driver.sleep(10000).then(function() {
  driver.getTitle().then(function(title) {
    console.log(title);
    if(title === 'webdriver - Google Search') {
      console.log('Test passed');
    } else {
      console.log('Test failed');
    }
    driver.quit();
  });
});
