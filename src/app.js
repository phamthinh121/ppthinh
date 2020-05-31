const express = require('express');
const path = require('path');
require('./db/mongoose');
const bodyParser = require('body-parser');
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const {sendWelcomeEmail,sendGoodbyeEmail} = require ('./emails/account')
 
const multer = require ('multer')

const app = express()
const port = process.env.PORT

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, '../public')));

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

// app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.post('/upload',upload.single('upload1'),(req,res)=>{
    res.send()
})

app.get('/create', (req, res) => {
    res.render('create')
})

app.post('/create',async (req,res)=>{
  const user = new User (req.body)
    try{
        await user.save()
        sendWelcomeEmail(user.email,user.name)
        const token = await user.generateAuthToken()
       res.redirect('/login');
    }catch(e) {
        res.status(500).send(e)
    }
})
app.get('/login', (req, res) => {
    res.render('login')
})
app.post('/login',async (req,res)=>{
    try{
        console.log(req.body)
        const user = await User.findByCredentials(req.body.email,req.body.password)
        const token = await user.generateAuthToken() 
        res.status(200).json({token: token});
    }catch(e){
         res.status(404).send({message: "Email and password wrong"})
    }
 })

app.use(userRouter)
app.use(taskRouter)

app.get('/',(req,res)=>{
    res.render('index')
})

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
