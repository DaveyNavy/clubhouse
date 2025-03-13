const pool = require("./pool");

const CREATE_TABLES = `
    CREATE TABLE IF NOT EXISTS users (
        id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        firstname VARCHAR(255),
        lastname VARCHAR(255),
        username VARCHAR(255),
        password VARCHAR(255),
        member_status BOOLEAN
    );

    CREATE TABLE IF NOT EXISTS messages (
        id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        title VARCHAR(255),
        text TEXT,
        timestamp timestamptz DEFAULT NOW(),
        author BIGINT REFERENCES users(id) NOT NULL
    );
`;
