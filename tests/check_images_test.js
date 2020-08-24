/// <reference types='codeceptjs' />

Feature('Avatar Images');

Scenario('Evaluate broken Images', async (I, ImagesPage) => {
    I.amOnPage('https://the-internet.herokuapp.com/broken_images');
    I.seeTitleEquals('The Internet');
    I.seeTextEquals('Broken Images', 'h3');

    const listOfImgsUrls = await ImagesPage.grabImgs()
    I.say(`\n`)
    I.say(`There are ${listOfImgsUrls.length} images on the page`,'grey');
    ImagesPage.printoConsole(listOfImgsUrls, 'grey')

    const brokenUrls  = await ImagesPage.filterBrokenImgs(listOfImgsUrls)
    const workingUrls  = await ImagesPage.filterWorkingImgs(listOfImgsUrls)
    // console.log(workingUrls)
    I.say(`\n`)
    I.say(`There are ${brokenUrls.length} broken images:`,'red');
    ImagesPage.printoConsole(brokenUrls, 'red')
    I.say(`\n`)
    I.say(`There are ${workingUrls.length} working images:`,'green');
    ImagesPage.printoConsole(workingUrls, 'green')
});
