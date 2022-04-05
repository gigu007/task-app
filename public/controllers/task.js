const Task = require('../modules/task');
const asyncWrapper = require('../middleWare/async');
const {createCustomError} =require('../middleWare/errors/custom-errors')

const getAllTasks= asyncWrapper( async(req,res)=>{
    
        const task = await Task.find({})
        res.status(200).json({task});
        // res.status(200).json({taks,amount:createTasks.length})
        // res.status(200).json({success:'success',data:{task,nbHits:createTasks.length}})

    
})
    
    


const createTasks=asyncWrapper( async(req,res)=>{
    
        const task = await Task.create(req.body);
        res.status(201).json({task})
    
   

})

const getTask=asyncWrapper( async(req,res)=>{
    
        const{id:taskID}=req.params
        const task = await Task.findOne({_id:taskID});
        
        if(!task){
            return next(createCustomError(`No task with the id :${taskID}`,404))
            // const error = new Error('Not Found')
            // error.status=404
            // return next(error)
            // return res.status(404).json({msg:`No task with id: ${taskID}`})
        }
        res.status(200).json({task})

    
    
})

const updateTask= asyncWrapper( async(req,res)=>{
   const {id:taskID}= req.params
   const task = await Task.findOneAndUpdate({_id:taskID},req.body,{
       new:true,
       runValidators:true,
   })
    if(!task){
        return next(createCustomError(`No task with the id :${taskID}`,404))
    }
    
       return res.status(200).json({id:taskID,data})
    
    
})
const deleteTask= asyncWrapper( async(req,res)=>{
    
   
        const {id:taskID}=req.params  
        const task = await Task.findOneAndDelete({_id:taskID})
        if(!task){
            return next(createCustomError(`No task with the id :${taskID}`,404))
        }
        res.status(200).json({msg:` task with the ID ${taskID} has been successfully deleted`})
   
     
    
})

module.exports = {
    getAllTasks,
    createTasks,
    getTask,
    updateTask,
    deleteTask
}

 