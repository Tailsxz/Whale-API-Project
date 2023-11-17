# Project Title

Whale Trivia App

Second pass at using APIs, utilizing the jService.io API to grab whale trivia questions and their answers.

## Getting Started

To get a copy of this project, you can fork the repo then clone it as your own.

### Prerequisites
- A Github Account
- Your local Git CLI, Git Bash comes with the windows Git installation.

### Installing

[Fork the Repo](https://github.com/octocat/Spoon-Knife)

[Clone the Repo](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

### Knowledge gained from this project
-Storing asynchronous data into a global variable works, but console logging that data within the main code flow will output undefined. This is because the Fetch() call works asynchronously, and so will be placed in the WEB API environment, while all synchronous calls are placed in the call stack and executed. So the console.log() will execute before the fetch happens and sets the global variables value. If we do a setTimeout(), with a delay to allow our fetch call to set the variable to hold the fetched data, we can see that our assignment worked.
-First use of destructuring to pull out the question/answer property of the current object array element to use within DOM manipulation.