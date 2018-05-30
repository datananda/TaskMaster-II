# TaskMaster II

TaskMaster II is a Sequelized version of [TaskMaster](https://github.com/madeloux/TaskMaster), a simple task tracking application which could be used as a Kanban or Scrum board. The user can enter tasks and move them between "To Do", "Doing", and "Done" states. The user can also associate a color with a task for better task categorization. The application uses an MVC framework and a Sequelize ORM to control the data flow.

## Getting Started

* Install the required node packages:

```
npm install
```

* Create the MySQL database using MySQL Workbench or the MySQL command-line interface:

```
CREATE DATABASE taskmasterii
```

* Configure your environment variables. You .env file should include the following variables and live in the root of your directory:

```
DB_HOST=your_db_host
DB_USER=your_db_user_name
DB_PASS=you_db_password
```

## Built With

* [Node](https://nodejs.org/en/) - for server-side JS
* [Express](https://expressjs.com/) - for server-side JS
* [MySQL](https://www.mysql.com/) - for the database
* [Sequelize](http://docs.sequelizejs.com/) - for the ORM
* [jQuery](https://jquery.com/) - for DOM manipulation and AJAX requests
* [Handlebars](https://handlebarsjs.com/) - for templating
* [Materialize](https://materializecss.com/) - for styling and responsiveness
