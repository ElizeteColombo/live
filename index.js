const express = require('express');

const app = express();
app.get('/teste',(reg,res) => {
    return res.json({hello: 'word'})
});
app.listen(3333);
