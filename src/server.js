import app from './app';

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log();
  console.log(`Port ${port}`);
  console.log(`CTRL + Clique em http://localhost:${port}`);
});
