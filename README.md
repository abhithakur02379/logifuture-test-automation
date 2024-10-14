<h2> Project Title </h2>
This project is logifuture-test-automation


<h2> Getting Started </h2>
These instructions will get you a copy of the project up and running on your local machine for testing purposes.

<h2> Prerequisites </h2>
<p> Following software should be installed on the machine:</p> <br>
<p> 1. Node.js </p>
<p> 2. Cypress </p>
<p> 3. Git </p>

<h2> Clone the repository </h2>
<p> To clone the repository into your local machine please execute below command </p>

```bash
git clone https://github.com/abhithakur02379/logifuture-test-automation.git
```

<p> After successfully cloning the repository please change directory to project folder by executing below command </p>

```bash
cd logifuture-test-automation
```

<h2> Running the tests </h2>

<h4> Login Page Tests - to run this test file from terminal please execute below command </h4>

```bash
npx cypress run --browser chrome --headed --spec  "cypress/e2e/LoginTests.cy.js"
```

<h4> Google Page Title Test - to run this test file from terminal please execute below command </h4>

```bash
npx cypress run --browser chrome --headed --spec  "cypress/e2e/GoogleTests.cy.js"
```
