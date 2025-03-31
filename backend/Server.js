import express from 'express';
import mongoose from 'mongoose';
import "dotenv/config";
import cors from 'cors';
import bodyParser from 'body-parser';
import Post from "./Models/Post.js"

let app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("Connected to MongoDB...");
})


app.get("/api/post", async(req,res)=>{
    let Data = await Post.find();
    res.json(Data);

})

app.post("/api/post",async (req,res)=>{
    let Data = req.body;
    let newPost = new Post(Data);
    await newPost.save();
    res.json({
        message: "Post added successfully"
    });

})




let port = process.env.PORT
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});