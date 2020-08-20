/// <reference types='codeceptjs' />

Feature('Basic Authentication');

Scenario('User Login', async (I) => {
    I.amOnPage('/');
    I.see('Basic Auth');
    I.see('Congratulations! You must have the proper credentials.')
});
