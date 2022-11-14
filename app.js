const express = require('express');
const app = express();
const {
    connectDB,
    getEmployees,
} = require('./alloydbconn');

app.use(express.json());
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on port 3000`);
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/employees', async (req, res) => {
    try {
        const employees = await getEmployees();
        res.json(employees);
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
});