"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var env = require('./.env');
exports.default = {
    development: {
        client: 'mysql2',
        connection: {
            host: env.host,
            user: env.user,
            database: env.database,
            port: 3306,
            password: env.password
        }
    }
};
