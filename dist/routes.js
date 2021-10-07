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
routes.post('/assinaturas', upload.single('assinatura_img'), AssinaturasController_1.default.create);
routes.get('/assinaturas', AssinaturasController_1.default.list);
routes.get('/assinaturas/:id', AssinaturasController_1.default.find);
routes.put('/assinaturas/:id', AssinaturasController_1.default.update);
routes.delete('/assinaturas/:id', AssinaturasController_1.default.delete);
routes.post('/categorias', CategoriasController_1.default.create);
routes.get('/categorias', CategoriasController_1.default.list);
routes.get('/categorias/:id_categoria/assinaturas', CategoriasController_1.default.find);
routes.put('/categorias/:id_categoria/', CategoriasController_1.default.update);
routes.delete('/categorias/:id_categoria', CategoriasController_1.default.delete);
exports.default = routes;
