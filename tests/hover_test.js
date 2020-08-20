/// <reference types='codeceptjs' />

const hoverPage = require("./pages/hover.page");

Feature('Hover');

Scenario('Hover avatar for more info', async (I) => {
    I.amOnPage('https://the-internet.herokuapp.com/hovers');
    I.see('Hovers');
    I.see('Hover over the image for additional information');
    let avatarsNum = await hoverPage.getAvatarsNum();
    I.say(`There are ${avatarsNum} avatars to test. \n`);
    I.say('Looping through avatars:');
    await hoverPage.hoverEach(avatarsNum);
});
