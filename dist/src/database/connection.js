"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var knex_1 = __importDefault(require("knex"));
var knexfile_1 = __importDefault(require("../knexfile"));
exports.default = (0, knex_1.default)(knexfile_1.default['development']);
console.log('Conexão realizada com sucesso');
