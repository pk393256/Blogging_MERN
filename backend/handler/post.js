
const mongoose = require('mongoose');
const postModel = require('../model/post');


async function getAllPost(req,res){
    // console.log('req.context',req.context)
    try {
        console.log('abc')
        let posts=await postModel.find({})
        console.log('posts',posts)
        if(posts.length==0){
            res.send('There are no post to show')
            return 
        }else{
        res.send(posts)
        return 
        }
    } catch (error) {
        res.send('')
        return
    }

}

async function createPost(req,res){
    let {id} = req.context.user[0];
    // console.log('req.context',id)
    try {
        let data={title,category,author,content}=req.body;
        let belongsTo=mongoose.Types.ObjectId(id)
        data={...data,belongsTo}
        console.log('data',data);
        let addPost=await postModel.create(data);
        res.send('Post added')



    } catch (error) {
        res.send(error)
        return
    }


}

async function updatePost(req,res){


}

async function deletePost(req,res){

}

module.exports={
    getAllPost,
    createPost,
    updatePost,
    deletePost
}
