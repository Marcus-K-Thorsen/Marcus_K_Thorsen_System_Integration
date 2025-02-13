import express from 'express';

const app = express();

app.get('/expressData', (req, res) => {
    res.send({ data: "This is the data from Express" });
});


app.get("/requestFastAPIData", async (req, res) => {
    const response = await fetch("http://127.0.0.1:8000/fastapiData");
    const result = await response.json();

    res.send({ data: result.data });
});

app.get("/names/:name", (req, res) => {
    console.log(req.params.name);
    res.send({ data: `Your name is ${req.params.name}` });
});

app.get("/calculator/:num1/:num2", (req, res) => {
    if (isNaN(req.params.num1) || isNaN(req.params.num2)) {
        res.send({ data: "Please enter valid numbers" });
    } else {
        const num1 = parseInt(req.params.num1);
        const num2 = parseInt(req.params.num2);

        const sum = num1 + num2;

        res.send({ data: `The sum of ${num1} and ${num2} = ${sum}` });
    }   
});

const PORT = 8080;
app.listen(PORT, () => console.log('Server started on port', PORT));
