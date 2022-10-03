
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
        // console.log('data',data);
        let addPost=await postModel.create(data);
        res.send('Post added')



    } catch (error) {
        res.send(error)
        return
    }


}

async function updatePost(req,res){
    let {_id}=req.params
    // res.send(_id)
    let {id}=req.context.user[0]
    try {
        let dataToUpdate=req.body;
        // res.send(dataToUpdate)
        let dataToChange=await postModel.findById({_id})
        if(dataToChange.belongsTo.toString()==id.toString()){
        let updatedData=await postModel.findByIdAndUpdate({_id},dataToUpdate)
        // console.log('updateData',updatedData)
        res.send('updated');
        }else{
            res.send('This post does not belongs to you')
        }
        // return
        
    } catch (error) {
        console.log(error)
        res.send('No such post exist');
        return
    }

}

async function deletePost(req,res){
    let {_id} = req.params;
    let {id} = req.context.user[0]
    try {
        let dataToDeleted=await postModel.findById({_id})
        if(dataToDeleted.belongsTo.toString()==id.toString()){
            await postModel.findByIdAndDelete({_id})
            res.send('deleted')
        }else{
            res.send('This post does not belongs to you')
        }
    }catch(error){
        res.send('No such post exist')
    }
}

module.exports={
    getAllPost,
    createPost,
    updatePost,
    deletePost
}
