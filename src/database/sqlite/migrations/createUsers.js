const createUsers = `
CREATE TABLE IF NOT EXISTS users
(
    id         INTEGER primary key autoincrement,
    name       VARCHAR,
    email      VARCHAR,
    password   VARCHAR,
    avatar     VARCHAR,
    created_at TIMESTAMP default CURRENT_TIMESTAMP,
    updated_at TIMESTAMP default CURRENT_TIMESTAMP
)`;

module.exports = createUsers;


