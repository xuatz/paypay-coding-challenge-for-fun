# Full Stack Developer Challenge

With no time limit, I'm gonna try complete all the features with some new libraries that I've always wanted to try.

1. Strapi
2. GraphQL
3. TailwindCSS

## Get Started

### Environment Requirements

1. yarn
2. docker, docker-compose

```sh
$ git clone https://github.com/xuatz/FullStackEngineerChallenge.git
$ cd FullStackEngineerChallenge
$ yarn install

# start mysql database in docker
$ docker-compose up -d

# run client
$ yarn client # localhost:3000

# run server
$ yarn server # localhost:8080
```

## What was completed?

1. `/admin/employees`
   1. adding new employee, persisted in database
1. `/admin/reviews`
   1. Create New Review
   1. `/admin/reviews/create`
      1. UI for creating Performance Review
      1. Select Reviewee and Assignees

![image](https://raw.githubusercontent.com/xuatz/FullStackEngineerChallenge/master/demo.gif)

## Application Design

- `/`
  - login form (will implement)
  - auth (low priority)
- `/admin/employees`
  - list of employees (will implement)
  - create new employee (will implement)
    - name
- `/admin/employees/:id` (low priority)
  - edit user information
  - delete user
- `/admin/reviews`
  - list of all performance reviews (will implement)
- `/admin/reviews/:id`
  - create/view (will implement)
  - edit/delete (low priority)
- `/reviews`
  - display a list of reviews assigned to logged in user (will implement)
- `/reviews/:id`
  - submit feedback for :reviewId (will implement)

### Will implement

1. Routes and Placeholder screens
1. Login Form
1. List of employees
   1. implement api to support create and query
1. Create employee
1. List of all performance reviews
1. Create/Edit/Delete performance review
1. List of performance reviews assigned to logged in user
1. Add feedback for selected performance review.

### Good to have

1. Proper authentication, verification and access control

### Low priority

1. Edit/Delete employee
1. Edit performance review feedback

## Assumptions

1. skipping authentication (out of scope)
1. skipping protected route verification with the server (out of scope)
1. skipping data validation (out of scope)

---

This is an interview challengs. Please feel free to fork. Pull Requests will be ignored.

## Requirements

Design a web application that allows employees to submit feedback toward each other's performance review.

_Partial solutions are acceptable._ It is not necessary to submit a complete solution that implements every requirement.

### Admin view

- Add/remove/update/view employees
- Add/update/view performance reviews
- Assign employees to participate in another employee's performance review

### Employee view

- List of performance reviews requiring feedback
- Submit feedback

## Challenge Scope

- High level description of design and technologies used
- Server side API (using a programming language and/or framework of your choice)
  - Implementation of at least 3 API calls
  - Most full stack web developers at PayPay currently use Java, Ruby on Rails, or Node.js on the server(with MySQL for the database), but feel free to use other tech if you prefer
- Web app
  - Implementation of 2-5 web pages using a modern web framework (e.g. React or Angular) that talks to server side
    - This should integrate with your API, but it's fine to use static responses for some of it
- Document all assumptions made
- Complete solutions aren't required, but what you do submit needs to run.

## How to complete this challenge

- Fork this repo in github
- Complete the design and code as defined to the best of your abilities
- Place notes in your code to help with clarity where appropriate. Make it readable enough to present to the PayPay interview team
- Complete your work in your own github repo and send the results to us and/or present them during your interview

## What are we looking for? What does this prove?

- Assumptions you make given limited requirements
- Technology and design choices
- Identify areas of your strengths
