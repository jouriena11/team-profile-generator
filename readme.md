# **Team Profile Generator**

## **Project Description**
This application automatically creates an HTML page that renders profiles of each team member into a different card according to a user's input, including a member's name, ID, email, role, and other property specific to a certain role (e.g. a manager's office numnber, an engineer's GitHub username, and an intern's school name).

---
## URLs
- [Walkthrough Video](https://drive.google.com/file/d/1YCrN_05XpT-DzmQoU4pmsCCP2rnC42SA/view?usp=sharing)
- [GitHub Repository URL](https://github.com/jouriena11/team-profile-generator)

---
## **Table of Contents**
- <a href="#installation">Installation</a>
- <a href="#usage">Usage</a>
- <a href="#tests">Tests</a>
- <a href="#future-developments">Future Developments</a>

---
## **Installation**
The following npm libraries must be installed to run this application:
- Inquirer version 8.2.4
- Jest version 29.4.0

The installations can be done conveniently by the running the following command line at the root directory: \
```
npm i
```
---
## **Usage**
From the root directory, run the following command line to invoke the application: 
```
node index.js
```
Answer the prompted questions, and an index.html file will be generated in the ./dist folder after all the questions have been answered.
<br>
<br>
<u>**Note**</u>: As the question asking for a team manager's office number is prompted, the application will validate for only a 10-digit number; a user must provide a valid input before proceeding to the next question.
<br>
<br>
Click this [link](https://drive.google.com/file/d/1YCrN_05XpT-DzmQoU4pmsCCP2rnC42SA/view?usp=sharing) for a walkthrough video of this application.

---
## **Tests**
The test files are provided in ./tests folder. These test files are operated using the Jest library. 

Each test file tests the codes relevant to each of the classes (i.e., employee, manager, engineer, intern). In a nutshell, the tests aims to confirm the following:
- the data (i.e., name, id, email, and role) is returned correctly
- the prompted questions address a correct employee role
- the prompted questions contain questions specific to each employee role (and does not contain questions specific to other employee role)

To run the tests, simply run the following command line:
```
npm test <file name>
```
---
## **Future Developments**
- To validate ID or autorun ID (i.e., each ID should be unique)
- To make it possible to create more than 1 team and choose to display team profiles from a dropdown menu on the frontend
- To make it possible to delete a team member from the frontend (by clicking the 'x' button at the top-right cornder of each team member's rendered card)
