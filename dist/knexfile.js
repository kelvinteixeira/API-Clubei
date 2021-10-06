"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
exports.default = {
    development: {
        client: 'mysql2',
        connection: {
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'clubei_db'
        },
        migrations: {
            tableName: 'knex-migrations',
            directory: path_1.default.resolve(__dirname, 'src', 'database', 'migrations')
        },
        seeds: {
            directory: path_1.default.resolve(__dirname, 'src', 'database', 'seeds')
        }
    }
};
