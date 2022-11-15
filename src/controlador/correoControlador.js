const { request, response } =require ('express');
const nodemailer = require('nodemailer');

const enviarCorreo = (req=request, resp=response) =>{
    let body = req.body;
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: 'ladytoxica4@gmail.com',
            pass: 'njdeumpkqrampovn',
        },
    });
    console.log('se conecto con Ladytoxica4@gmail.com')

    // send mail with defined transport object
    const info = transporter.sendMail({
        from: '"VARIETÉ X EL PROFESORADO 🎭" <ladytoxic@gmail.com>', // sender address
        to: body.email, // list of receivers
        subject: body.asunto, // titulo del mensaje
        html: body.html, // plain text body
    });


    transporter.sendMail(info, function(error,result){
        if (error) return resp.json({
            ok:false, msg:error
        });
        return resp.json({
            ok:true,
            msg:result
        });
    })
}

module.exports = {
    enviarCorreo
}
