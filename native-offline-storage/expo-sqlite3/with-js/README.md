### Expo SQLite with JavaScript

In this example we are going to look at how we can store the data in an `expo` application using a file based system database called `SQLite`. We are going to show an example based on a `todo` application.

### Getting started

Next we will need to install the `expo-sqlite` package as follows:

```shell
expo install expo-sqlite
```

### Creating a todo application

We are going to demonstrate how to use the `expo-sqlite` by creating a todo application.

### Creating a Database.

To open a database we are going to use the `openDatabase` from `expo-sqlite`. We are going to create and export a `db` instance from `./db/index.js` file which looks as follows:

```js
import * as SQLite from "expo-sqlite";
import { Platform } from "react-native";

const openDatabase = (databaseName) => {
  if (Platform.OS === "web") {
    return {
      transaction: () => {
        return {
          executeSql: () => {},
        };
      },
    };
  }
  const db = SQLite.openDatabase(databaseName);
  return db;
};

const databaseName = "todos.db";
export const db = openDatabase(databaseName);
```

### Creating a table

We are going to create a table if it doesn't exists when the app component mount. We are going to use the `CREATE_TABLE_COMMAND` which is found in the `commands.js` file and it looks as follows.

```ts
// create table command
export const CREATE_TABLE_COMMAND = `
CREATE TABLE IF NOT EXISTS todos(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    completed BOOLEAN NOT NULL CHECK (completed IN (0, 1)) DEFAULT 0
);
`;
// insert into todos table command

export const INSERT_TODO_COMMAND = `
INSERT INTO todos(title) VALUES(?);
`;
// get all todos command
export const ALL_TODOS_COMMAND = `
SELECT * FROM todos ORDER BY id DESC;
`;
// get a single todo command
export const SINGLE_TODOS_COMMAND = `
SELECT * FROM todos WHERE id = ?;
`;
// update todo command
export const UPDATE_TODOS_COMMAND = `
UPDATE todos SET completed = ? WHERE id = ?;
`;
// delete todo command
export const DELETE_TODOS_COMMAND = `
DELETE FROM todos WHERE id = ?;
`;
```

### Executing Queries

To execute queries we are going to use a `transactional` object from the `db` instance. The first argument it takes is a `SQL COMMAND` to be executed, and the second argument are the values that are passed to the prepared `SQL_STATEMENT/COMMAND`. The 3rd argument is a callback (which runs when the sql command was executed successfully) which returns us a `transactional` object with `results` as the second argument. The third argument is a `callback` that runs when there's an error and it also returns us a `transactional` object together with the `error` object that contains a `code` and `message`.

### Example on how to make Queries

In the following example I will show how we can execute `SQL COMMANDS` using the `db` object instance. I will show by querying all the `todos` in the database and set them to the state.

```js
useEffect(() => {
  let mounted = true;
  if (mounted) {
    db.transaction((transaction) => {
      transaction.executeSql(
        ALL_TODOS_COMMAND,
        [],
        (transaction, { rows }) => setTodos(rows._array),
        (transaction, { message }) => console.log(message)
      );
    });
  }
  return () => {
    mounted = false;
  };
}, []);
```

### Refs

1. [docs.expo.dev](https://docs.expo.dev/versions/latest/sdk/sqlite/)
2. [expo/examples](https://github.com/expo/examples/blob/master/with-sqlite/App.js)
