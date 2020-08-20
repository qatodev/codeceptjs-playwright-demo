const I = actor();

const assert = require ('assert')

module.exports = {
    async getAvatarsNum() {
        return I.grabNumberOfVisibleElements('//div[@class="figure"][@*]')
    },
    
    async hoverEach(avatarsNum) {
        // Looping through all avatars and asserting that
        // hover text is correct
        for (let i = 1; i <= avatarsNum; i++) {
            I.say('')
            I.say(` Hovering avatar #${i}`)
            let element = `//div[@class="figure"][${i}]`
            I.moveCursorTo(element);

            // Asserting user's name from hover data
            let userName = await I.grabTextFrom(`${element}/div/h5`);
            I.see(userName);

            // Asserting user's reference from hover data
            let userRef = await I.grabAttributeFrom(`${element}/div/a`,'href');
            I.seeElement(`${element}/div/a`);

            // Printing the result to terminal
            I.say('');
            I.say(`The following text appears when hovering avatar #${i}`);
            I.say(` ${userName}`);
            I.say(` ${userRef}`);
            
            I.wait(1); //remove this to increase execution speed
        }
    }
}