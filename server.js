const express = require('express');
const bodyparser = require('body-parser');
const app = express();

const port = process.env.PORT || 5555;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
