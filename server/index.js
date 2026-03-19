const express = require('express');
const app = express();

const port = 8080;
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
app.get('/',(req, res) => {
    res.send("Crane");
});

app.listen(port, ()=> {
    console.log(`Server is running on http://localhost:${port}`);
});