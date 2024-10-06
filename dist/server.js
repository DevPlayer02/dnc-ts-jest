"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var produto_route_1 = require("./module/produto/produto.route");
var app = express();
app.use(express.json());
app.use('/produto', produto_route_1.default);
app.listen(8080, function () {
    console.log('Servidor funcionando!!');
});
