"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var app = (0, express_1.default)();
var PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
app.use(express_1.default.json());
app.use(routes_1.default);
app.use('/uploads/', express_1.default.static('uploads'));
app.listen(PORT, function () {
    console.log("Server is listening at http://localhost:" + PORT);
});
app.get('/', function (req, res) {
    return res.json({
        Status: "Okay"
    });
});
