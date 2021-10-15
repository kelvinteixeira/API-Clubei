"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var cors_1 = __importDefault(require("cors"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var swagger_json_1 = __importDefault(require("./swagger.json"));
var app = (0, express_1.default)();
var PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/v1', routes_1.default);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
app.use('/uploads/', express_1.default.static('uploads'));
app.listen(PORT, function () {
    console.log("Server is listening at http://localhost:" + PORT);
});
app.get('/', function (req, res) {
    return res.json({
        message: 'Bem vindo a REST-API de consulta do Clubei, está API foi desenvolvida para o site Clubei, projeto final do Gama Xp 38ª edição. Para consultar mais informações e os endpoints, acesse nossa documentação digitando ao fim da barra de pesquisa api-docs'
    });
});
