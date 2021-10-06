"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var AssinaturasController_1 = __importDefault(require("./controllers/AssinaturasController"));
var CategoriasController_1 = __importDefault(require("./controllers/CategoriasController"));
var storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
var upload = (0, multer_1.default)({ storage: storage });
var routes = (0, express_1.Router)();
routes.post('/api-clubei/assinaturas', upload.single('assinatura_img'), AssinaturasController_1.default.create);
routes.get('/api-clubei/assinaturas', AssinaturasController_1.default.list);
routes.get('/api-clubei/assinaturas/:id', AssinaturasController_1.default.find);
routes.put('/api-clubei/assinaturas/:id', AssinaturasController_1.default.update);
routes.delete('/api-clubei/assinaturas/:id', AssinaturasController_1.default.delete);
routes.post('/api-clubei/categorias', CategoriasController_1.default.create);
routes.get('/api-clubei/categorias', CategoriasController_1.default.list);
routes.get('/api-clubei/categorias/:id_categoria/assinaturas', CategoriasController_1.default.find);
routes.put('/api-clubei/categorias/:id_categoria/', CategoriasController_1.default.update);
routes.delete('/api-clubei/categorias/:id_categoria', CategoriasController_1.default.delete);
exports.default = routes;
