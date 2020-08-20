/// <reference types='codeceptjs' />

Feature('Slider');

Scenario('Slider max and min', async (I) => {
    I.amOnPage('https://the-internet.herokuapp.com/horizontal_slider');
    I.see('Horizontal Slider');
    I.see('Set the focus');
    let slider = '//input'
    
    //Slider position before dragging
    var currentPos = await I.grabTextFrom('//span');
    I.say(`Current slider position is: ${currentPos}`);

    I.dragSlider(slider,100);
    currentPos = await I.grabTextFrom('//span');
    I.say(`Current slider value is: ${currentPos}`);

    I.dragSlider(slider,-100);
    currentPos = await I.grabTextFrom('//span');
    I.say(`Current slider value is: ${currentPos}`);
    pause();
    I.wait(2);
});
