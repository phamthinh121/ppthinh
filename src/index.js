const express = require('express');
require('./db/mongoose');

const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
 
const multer = require ('multer')

const app = express()
const port = process.env.PORT

// app.use((req,res,next)=>{
//     if(req.method === 'GET'){
//         res.send('GET methods are disable')
//     }else{
//         next()
//     }
// })

// app.use((req,res,next)=>{
    
//         res.status(503).send('site is currently down,check back soon')
    
// })
const upload = multer({
    dest:'images',
    limits:{
        fileSize:1000000
    },
    fileFilter(req,file,cb){
        if(!file.originalname.endsWith('.pdf')){
            return cb(new Error('please upload a pdf file'))
        }
        cb(undefined,true)
    }
})
app.post('/upload',upload.single('upload1'),(req,res)=>{
    res.send()
})


app.use(express.json())

app.use(userRouter)
app.use(taskRouter)





// app.patch('/users/:id',async(req,res)=>{
//     const updates= Object.keys(req.body)
//     const allowedUpdates=['description','complete']
//     const isValidOperation = updates.every((update)=> allowedUpdates.includes(update))
//     if(!isValidOperation){
//         return res.status(400).send({error:'invalid updates'})
//     }
   
//     try{ const task= await Task.findByIdAndUpdate(req.params.id,req.body,{new:true, runValidators:true})
//     if(!user){
//         return res.status(404).send()
//     }
//     res.send(user)

//     }catch(e){
//         res.status(400).send(e)
//     }

//     })


app.listen(port,()=>{
    console.log('server is up on port'+port)
})

// const jwt = require('jsonwebtoken')
// const myFunction = async ()=>{
//     const token = jwt.sign({_id:'abc123'},'matkhausecret',{expiresIn:'10 days'})
//     console.log(token)
//     const data = jwt.verify(token,'matkhausecret')
//     console.log(data)
// }
// myFunction()

// const main = async ()=>{
//     // const task = await Task.findById('5ecfe73dff7ce00e209b8e1a')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)
//     const user = await User.findById('5ecf79def09b342f2c3d6933')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }
// main()
