/// <reference types='codeceptjs' />

Feature('Avatar Images');

Scenario('Evaluate broken Images', async (I, ImagesPage) => {
    I.amOnPage('https://the-internet.herokuapp.com/broken_images');
    I.seeTitleEquals('The Internet');
    I.seeTextEquals('Broken Images', 'h3');
    
    const numOfImgs = await I.grabNumberOfVisibleElements('//*[@id="content"]/div/img');
    I.say(`There are ${numOfImgs} images on the page`);
    
    let brokenUrls = await ImagesPage.brokenImg();
    let numBrokenUrls = brokenUrls.length
    I.say(`There are ${numBrokenUrls} broken images:`);
    ImagesPage.printoConsole(brokenUrls)
    
});
