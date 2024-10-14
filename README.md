<h2> Project Title </h2>
This project is logifuture-test-automation


<h2> Getting Started </h2>
These instructions will get you a copy of the project up and running on your local machine for testing purposes.

<h3> Prerequisites </h3>
Following software should be installed on the machine:</n>
<p> </p>
<p> 1. Node.js </p>
<p> 2. Cypress </p>
<p> 3. Git </p>


---------       Instructions to execute the scenarios are mentioned below       ----------


1. Analysis Text file is present with the description of the test scenarios



2. Login Page Tests - to run this test file from terminal please execute below command

    npx cypress run --browser chrome --headed --spec  "cypress/e2e/LoginTests.cy.js"



3. Google Page Title Test - to run this test file from terminal please execute below command

    npx cypress run --browser chrome --headed --spec  "cypress/e2e/GoogleTests.cy.js"
