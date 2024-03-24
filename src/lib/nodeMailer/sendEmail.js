import * as nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port: 587,
    auth:{
        user:"neelamverma130604@gmail.com",
        pass:"sngkuqkjcjzslanv"
    }
})

export function send(name){

    let template=`<p>Hello ${name},</p>`

    const message={
        from:"neelamverma130604@gmail.com",
        to:"neelam.verma_cs22@gla.ac.in",
        subject:"test",
        html:template
    }

    transport.sendMail(message, (err, info) => {
        if (err) {
            console.log(err)
        } else {
            console.log(info)
        }

    }).then((res) =>{
        console.log(res)
    })
}