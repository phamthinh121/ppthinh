const mongoose = require('mongoose');
// const validator = require('validator');

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useFindAndModify: false,
    useCreateIndex:true
    
    

  
})

// const User = mongoose.model('User',{
//     name:{
//         type: String,
//         required:true,
//         trim: true

//     },email:{
//         type: String,
//         required:true,
//         trim:true,
//         lowercase:true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new error('email is invalid')
//             }
//         }
//     },password:{
//         type:String,
//         required:true,
//         minlength:7,
//         trim:true,
//         validate(value){
//             if(value.toLowerCase().includes('password')){
//                 throw new error('Password cannot contain "password"')
                
//             }
//         }
//     },
//     age :{
//         type: Number,
//         default:0,
//          validate(value){          
//             if(value<0){
//                 const e = new Error('')
//                 throw new error('age must be positive number!')
//             }
//         }

//     }
// })

// const me = new User ({
//     name:"thinhdeptry",
//     email:"GNABLJKHJ@gmail.com",
//     password: "    Phamthinh121@"

// })

// me.save().then(()=>{
//     console.log(me)
// })
// .catch((error)=>{
//     console.log('error!',error)
// })
// me.save().catch((erorr)=>{
//     console.log('error!',error)
    
// })

// const Task = mongoose.model('Task',{
//     description:{
//         type:String,
//         trim:true,
//         required : true
//     }, Complete:{
//         type: Boolean,
//         default:false
//     }
// })
// const ass1= new Task({
//     description: "nothing",
//     Complete:true
// })
 
// ass1.save().then((ass1)=>{
//     console.log(ass1)
// }).catch((error)=>{
//     console.log('error',error)
// })


// const Task1 = mongoose.model('Taskmany',{
//     name:{
//         type: String,
//         trim:true,
//         require:true
//     },
//     age :{
//             type: Number,
//             default:0,
//             validate(value){          
//                      if(value<0){
//                         const e = new error('')
//                         throw new error('age must be positive number!')
//                     }
//                 }
//             },
//             email:{
//                         type: String,
//                         required:true,
//                         trim:true,
//                         lowercase:true,
//                         validate(value){
//                             if(!validator.isEmail(value)){
//                                 throw new error('email is invalid')
//                             }
//                         }
//                     },password:{
//                         type:String,
//                         required:true,
//                         minlength:7,
//                         trim:true,
//                         validate(value){
//                             if(value.toLowerCase().includes('password')){
//                                 throw new error('Password cannot contain "password"')
                                
//                             }
//                         }
//                     }
// })
// const task1= new Task1({
//      name:"thinh1",age:20,email:"ganbaru@gmail.com",password:"ditcailahoi"
// })
// task1.save().then((task1)=>{
// console.log(task1)
// }).catch((error)=>{
// console.log(error)
// })