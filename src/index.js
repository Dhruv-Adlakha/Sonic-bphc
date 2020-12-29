const express = require('express');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
require('./db/mongoose');

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(postRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
