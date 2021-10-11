"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var swagger_json_1 = __importDefault(require("./swagger.json"));
var app = (0, express_1.default)();
var PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
app.use(express_1.default.json());
app.use(routes_1.default);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
app.use('/uploads/', express_1.default.static('uploads'));
app.listen(PORT, function () {
    console.log("Server is listening at http://localhost:" + PORT);
});
app.get('/', function (req, res) {
    return res.json({
        message: "Bem vindo a REST-API de consulta do Clubei, para mais informações acesse nossa documentação digitando na barra de pesquisa /api-docs"
    });
});
