import express from 'express';//to create webserver
import data from './data';
// mongos 
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';
// mongos END 
import bodyparser from 'body-parser';
import userRoute from './routes/userRoutes';


dotenv.config();
const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology:true,
  useCreateIndex: true
  
}).catch(error => console.log(error.reason));

const app = express();
app.use(bodyparser.json());
app.use("/api/users", userRoute);
app.get("/api/products/:id", (req,res) => {
    const productId = req.params.id;  
    const product = data.products.find(x=>x.id === productId);
    if (product)      
      res.send(product);
    else
      res.status(404).send({msg: "Product not found"})
});
app.get("/api/products", (req,res) => {
    res.send(data.products);
});

app.listen(5000, ()=> {console.log("server started at localhost:5000")});
// run node backend/server.js then you get error of unexpected identifier because node understand es5 & this is es6 
// ans: npm install @babel/cli @babel/core @babel/node @babel/preset-env nodemon --save-dev
// and add .babelrc file in the root folder and make some changes also add script in package.json for run
