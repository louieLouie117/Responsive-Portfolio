# Portfolio

Responsive MERN Portfolio


# Progress log

Monday December 14 2020

At 8:04 am, I developed the backend and test that all routes work with postmen. I will move on to the frontend and implement CRUD operations. After a few hours, I rendered all db and set a conditional statement based on the project type. One issue that I am having is with is the details function. When the function runs, all details for every project show. I need them to show only the details base on the project. I have a theory that I could fix this using a boolean. I will create a new branch and test my theory. After hours of programming at 7:24 pm, I successfully got the details function to show each project's individual details. My theory on using a boolean in the db was correct.  I will save all these findings in my memory bookshelf. 

Tuesday, December 15, 2020

Yesterday was an exciting day, and this morning I realized that I could implement the function on mouse enter and mouse leave. Pondering about yesterday's accomplishment helped me recognize the importance of formulating a hypothesis,  using a branch to experiment, and console logging to analyzing the results. I will continue my progress and finish the "update" crud operation. 

# Tasks
## Backend 
- [x] Set up sever-side
- [ ] User Models
- [x] Project models



## Frontend 
- [x] set up client
- [x] Render Data
- [ ] CRUD Operations
  - [x] Crate
  - [x] Render
  - [ ] Update
  - [x] Delete
- [ ] Reg/Login
- [x] Implement conditional statements
- [x] Hover/onClick base on selected project





# Acknowledgment
I would like to thank all of the amazing instructors and TAs at Coding Dojo for teaching me the skills needed to become a self-sufficient developer. 

# Documentation
The documentation I used was from npm, Inc you can find the article I read to get the file uploader to work [here](https://www.npmjs.com/package/express-fileupload).

I also use postman to POST the data you can find more information on postman [here](https://www.postman.com/).



# Backend dependencies
```bash
npm init -y
````

```bash
npm install mongoose
````
```bash
npm install express
````

```bash
npm install cors
````
```bash
npm i express-fileupload
````
# Frontend dependencies

```bash
npx create-react-app client
````

```bash
npm install axios
````

```bash
npm install @reach/router
````