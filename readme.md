### Intro
This repo contains an automation framework based on codeceptJS and Playwrite browser automation api.

Further bellow there are references to the tech stack used.
Here are the scenarios included:
* Scenario 1 \
https://the-internet.herokuapp.com/broken_images \
Evaluate the broken images out of all images and assert the result.
* Scenario 2 (Basic Auth) \
https://the-internet.herokuapp.com/basic_auth \
Perform login \
Basic Auth (user and pass: admin)
* Scenario 3 \
https://the-internet.herokuapp.com/horizontal_slider \
Move slider to max and assert the number Move slider to min value and check the number
* Scenario 4 \
https://the-internet.herokuapp.com/hovers \
Hover on the pictures and assert the details like User

### Set-up and start tests
    npm install
    npx codeceptjs run --steps

### First impression and getting to know
https://www.youtube.com/watch?v=LjqMBYLiyC4&t=4762s

### Setting up and creating tests
https://codecept.io/quickstart/
https://codecept.io/examples/
https://github.com/codeceptjs/CodeceptJS/tree/master/docs
#### What are Config Hooks in CodeceptJS: 
https://youtu.be/onBnfo_rJa4

#### Frontend integration test framework with CodeceptJS and Playwright:
https://link.medium.com/yfuZbNZi68

### Integrating with TestRail
https://github.com/PeterNgTr/codeceptjs-testrail

### API tests (REST) with Jenkins and Docker
https://github.com/PeterNgTr/codeceptjs-rest-demo

### Advanced CodeceptJS tests
https://codeburst.io/customising-codeceptjs-e2e-tests-1a2bf5f32f51
https://www.programmersought.com/article/9341579465/

### Puppeteer API: https://pptr.dev/
### Playwright API: https://playwright.dev/ , https://github.com/microsoft/playwright

### Creating a good project CodeceptJS automation framework folder structure with configs, envs, cucumber etc
https://medium.com/successivetech/codeceptjs-skeleton-9ba86d3b45ec

### CodeceptJS books and articles: 
https://github.com/codeceptjs/CodeceptJS/blob/master/docs/books.md


### Some examples of creating the brokenimages test
http://elementalselenium.com/tips/67-broken-images

### Writing tests examples
https://codecept.io/acceptance/

### RegExp info
https://javascript.info/regexp-introduction