const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('servicos de api! v2');
});

app.listen(port, () => console.log(`Servidor rodando na porta ${port}!`))