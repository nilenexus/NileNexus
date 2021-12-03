import PostMessage  from '../models/PostMessage.js';

import mongoose from 'mongoose';
export const getPosts = async (req,res)=>{

try {
    const PostMessages = await PostMessage.find();
    console.log(PostMessages);
    res.status(200).json(PostMessages);
} catch (error) {
    res.status(404).json({message : error.message});
}}


export const createPost = async (req,res)=>{
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);

    } catch (error) {


        res.status(409).json({message : error.message});
    }
}
export const updatePost = async(req,res) =>{

    const {id} = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    console.log("test in controller" + " " + req.params);
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(' No post with this id');

    //const updatedPost = await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });
    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);   
}

    export const deletePost = async(req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(' No post with this id');

    await PostMessage.findByIdAndRemove(id);
    res.json({ message: "Post deleted successfully." });

}

export const likePost = async(req,res) =>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(' No post with this id');

    const post = await PostMessage.findById(id);

    const updatedPost = await PostMessage.findByIdAndUpdate(id,{likeCount:post.likeCount+1},{new:true});
    
     res.json(updatedPost);
}
