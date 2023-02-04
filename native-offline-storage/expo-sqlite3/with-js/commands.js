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
