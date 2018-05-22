# TaskMaster

TaskMaster is a simple task tracking application which could be used as a Kanban or Scrum board. The user can enter tasks and move them between "To Do", "Doing", and "Done" states. The application uses an MVC framework and an ORM to control the data flow.

## Getting Started

* Install the required node packages:

```
npm install
```

* Set up the MySQL database and tables. In the db folder, you will find the [schema.sql](db/schema.sql) file which includes the database set-up as well as the [seeds.sql](db/seeds.sql) file which includes some insert statements to get you started.

* Configure your environment variables. You .env file should include the following variables and live in the root of your directory:

```
DB_HOST=your_db_host
DB_USER=your_db_user_name
DB_PASS=you_db_password
```

## Built With

* [Node](https://nodejs.org/en/) - for server-side JS
* [Express](https://expressjs.com/) - for server-side JS
* [MySQL](https://www.mysql.com/) - for database stuff
* [jQuery](https://jquery.com/) - for DOM manipulation and AJAX requests
* [Handlebars](https://handlebarsjs.com/) - for templating
* [Materialize](https://materializecss.com/) - for styling and responsiveness
