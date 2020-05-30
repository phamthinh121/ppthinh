const sgMail = require('@sendgrid/mail')



sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// const msg = {
//  to: '17521312@gm.uit.edu.vn',
//  from: 'ganbaruppt@gmail.com',
//  subject:'send2',
//  text:"mblasdkl"
// }
const sendWelcomeEmail = (email,name)=>{
   sgMail.send({
        to: email,
        from: 'ganbaruppt@gmail.com',
        subject:'thank you for joining in!',
        text:`welcome , ${name} .to this app`
    })
}
const sendGoodbyeEmail = (email,name)=>{
    sgMail.send({
        to:email,
        from:'ganbaruppt@gmail.com',
        subject:"thank you and goodbye",
        text:`thanks you ${name}, see you again`
    })
}

// sgMail.send(msg).then(() => {
//     console.log('Message sent')
// }).catch((error) => {
//     console.log(error.response.body)
//     // console.log(error.response.body.errors[0].message)
// })
module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}
