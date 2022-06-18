import express from 'express';

const app = express();
const port = process.env.PORT || 8080;

app.set('views', './src/views'); // set views pada direktori ./src/views
app.set('view engine', 'ejs'); // set view engine menggunakan EJS
// app.use(express.static('./src/public')); // add express static in public dir

app.get('/', (req, res) => {
   res.render('index');
});

app.listen(port || 8080 , (req, res) => console.log(`running on port ${port}`));
