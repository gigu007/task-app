const Task = require('../modules/task');

const getAllTasks= async(req,res)=>{
    try {
        const task = await Task.find({})
        res.status(200).json({task});
    } catch (error) {
       res.status(500).json({msg:error}) ;
    }
    
    
}

const createTasks= async(req,res)=>{
    try{
        const task = await Task.create(req.body);
        res.status(201).json({task})
    }catch(error){
      res.status(500).json({msg:error})
    }
   
    
}

const getTask= async(req,res)=>{
    try {
        const{id:taskID}=req.params
        const task = await Task.findOne({_id:taskID});
        
        if(!task){
            return res.status(404).json({msg:`No task with id: ${taskID}`})
        }
        res.status(200).json({task})

    } catch (error) {
        res.status(500).json({msg:error})
    }
    
}
const updateTask=async(req,res)=>{
   const {id:taskID}= req.params
   const task = await Task.findOneAndUpdate({_id:taskID},req.body,{
       new:true,
       runValidators:true,
   })
    if(!task){
        return res.status(404).json({msg:`No task with the given id : ${taskID}`})
    }
    try {
       return res.status(200).json({id:taskID,data:req.body})
    } catch (error) {
        return res.status(500).json({msg:error})
    }
    
}
const deleteTask=async(req,res)=>{
    
    try {
        const {id:taskID}=req.params  
        const task = await Task.findOneAndDelete({_id:task})
        if(!task){
            return res.status(404).json({msg:`No task with id: ${taskID}`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
     
    
}

module.exports = {
    getAllTasks,
    createTasks,
    getTask,
    updateTask,
    deleteTask
}

 