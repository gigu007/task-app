

const getAllTasks=(req,res)=>{
    res.send('all items from gigu')
}

const createTasks=(req,res)=>{
    res.json(req.body)
}

const getTask=(req,res)=>{
    res.json({id:req.params.id})
}
const updateTask=(req,res)=>{
    res.send('update task')
}
const deleteTask=(req,res)=>{
    res.json('delete task')
}

module.exports = {
    getAllTasks,
    createTasks,
    getTask,
    updateTask,
    deleteTask
}