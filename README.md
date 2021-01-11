# Portfolio

Responsive MERN Portfolio


# Progress log

Monday December 14 2020

At 8:04 am, I developed the backend and test that all routes work with postmen. I will move on to the frontend and implement CRUD operations. After a few hours, I rendered all db and set a conditional statement based on the project type. One issue that I am having is with is the details function. When the function runs, all details for every project show. I need them to show only the details base on the project. I have a theory that I could fix this using a boolean. I will create a new branch and test my theory. After hours of programming at 7:24 pm, I successfully got the details function to show each project's individual details. My theory on using a boolean in the db was correct.  I will save all these findings in my memory bookshelf. 

Tuesday, December 15, 2020

Yesterday was an exciting day, and this morning I realized that I could implement the function on mouse enter and mouse leave. Pondering about yesterday's accomplishment helped me recognize the importance of formulating a hypothesis,  using a branch to experiment, and console logging to analyzing the results. I will continue my progress and finish the "update" crud operation.

Wednesday, December 16, 2020

It is now 6:56 am and I was able to get the update operation working. I was having an error with Axios not show the correct data in the edit form. I was able to fix this with console log analysis and it turns out that the error was in the controllers. The find single function was missing the req.param.id. After adding the param id the error was fixed. 

Thursday, December 31 2020

Today I work on the about me page and got about 80% completed. I was able to use conditional statements to render elements base on the screen size, however there is still a bug that is happening in mobile deceive.   

Friday, January 01 2021

Today I was able to crate a menu button with motion behaver. I was able to do accomplish by using ternary operators, state, and functions. I have also finished the UX design from the all sections in the about me page. I will developing this sections tomorrow and attempt to apply this new discovery of adding motion to behaviors. 


Saturday, January 02 2020

Today I finished adding transition to my process sections. For now I will be using Lorem as place holders for the connect that I will fill in later. I also was able to use the e.target to change the inner from read more to close when a user select and from close to read more when they select it again.


Sunday, January 03 2020

Today I was able to merge all components together finalizing the SPA. However, I got an idea to give motion when the a user selected different pages. To do this I will have to make some adjustment on how the components structure. I will create a new branch to re-structure the components. 


Monday, January 04 2020

Today I was able to create a smooth motion effect when a user selects a section to read on my process section, however this broke the mobile version of my story section and I will crate a mew branch from the current branch to fix the mobile version. It is now 3:00pm and I was able to fix the mobile with custom div pillars and is working now.
This project is ready for deployment I have create a debugging branch and will be looking for bugs in the next few of days.


Tuesday, January 05 2020

This morning I was able to find a bug when rending on a mobile version that was causing the last element to be cut off. I was able to fix this by adding and li element at the end of the ul and using the last-child to target the li and style it with a fixed width/height. I was able to apply this to another palace on the SPA and will store this for recall on other projects. I have decided to make the about me component with full CRUD. This might push the deployment back a few days. However, having full CURD will be worth it. Lastly, before working on the CRUD, I want to see if there is a way to get rid of the conditional statement for the mobile so that when I start looping the db there will be one less place to loop and less code to keep track off. I was able to find a solution, however other li elements move around and I did not like the user experience. For now Ill leave it at this stable stage.  


Wednesday, January 06 2020

This morning I was able to finish the backend MCV for both My Info and My process. While working on the db I got an idea to add an like count so I made modification to the models. I also started rendering the data in the frontend with the like count.

Thursday, January 07 2020

This morning I was working MCV and made some adjustments to include an easter egg. Do to the changes in the models I also have to update the frontend CRUD operations. Also, I am getting a rendering bug when changing from one to another so I will fix this before moving on the the other CRUD OPPS. I was able to fix the bug and will start the CRUD OPPS. I was able to CRD for my Info db collection, However I did run into a situation where I need to have multiple images. I will have to restructure my models and finish the update tomorrow. 


Friday, January 08 2020 

Today I got must of the rendering done, however I am getting a rending error that not all db is being show. I believe that this is being caused by the way I have restructure my HTML. I will need to saved this branch since it is stable and will start a new brach to fix the HTML and CSS so the rendering show all db.



Saturday, January 09 2020

This morning I was able to fix the rendering error I was getting when looping the db. I was able to do fix this with a nested ul/li in a li element. I  also was able to render db with conditional statements base on the category so that it filters the content for by each section. I found another error when looping the db that was adding whitespace elements from other categories. With the dev tools, I was able to determine that the conditional statement was causing the error. I was able to fix this by restructuring when the conditional statement was called. I update both the desktop and mobile with the new structure and will continue with the CRUD operations Monday.


Monday, January 11 2020

This morning I got the undo like function working. This was complex since there are multiple projects that a user can like or unlike. I was able to make this function work by using inner text and state. I had the function check two conditional statements. If innerText === "like" and if state was === false/true.

# Tasks
## Backend 
- [x] Set up sever-side
- [x] My Info file **uploader**
  - [x] Controllers
  - [x] Models
  - [x] Rotes
- [x] Process Models
  - [x] Controllers
  - [x] Models
  - [x] Rotes
- [x] Project models



## Frontend 
- [x] set up client
- [x] Render Data
- [x] Project CRUD Operations
  - [x] Create
  - [x] Render
  - [x] Update
  - [x] Delete
- [x] Implement conditional statements
- [x] Hover/onClick base on selected project
- [x] My Info CRUD Operations
  - [x] Create
  - [x] Render
  - [ ] Update
  - [x] Delete
- [ ] Process CRUD Operations
  - [ ] Create
  - [x] Render
  - [ ] Update
  - [ ] Delete
  





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