const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();

app.use(bodyParser.json());

app.post("/salvar", (req, res, res, res) => {
    const { nome, valorC, valorV, quant } = req.body;

    // Salvar as informações em um arquivo (exemplo: dados.json)
    fs.appendFile("dados.json", `${nome}, ${valorC}, ${valorV}, ${quant}\n`, (err) => {
        if (err) {
            res.json({ success: false, error: err.message });
        } else {
            res.json({ success: true });
        }
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
