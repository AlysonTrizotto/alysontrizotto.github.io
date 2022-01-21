const nodemailer = require("nodemailer")

        console.log('Entrou no botao')
                const botao = document.getElementById('enviar');
                botao = document.addEventListener('click',() => {
                botao.classList.toggle(enviarEmail)
                })
                    function enviarEmail (){
                    let transport = nodemailer.createTransport({
                    service: 'gmail',  
                    auth: { 
                        user: "",
                        pass: ""
                    }});
        
                    const mailOption = {
                        from: "Alyson Leandro <alysontrizotto1@gmail.com>",
                        to: ["alysontrizotto@outlook.com.br","vanyribeiro51@gmail.com", "vany.ribeiro51@gmail.com"],
                        subject: "Oi, Alyson",
                        text:"Consegui enviar e-mail com nodemailer"
                    }
        
                    transport.sendMail(mailOption, (err, info) => {
                        if(err){
                            console.log(err)
                        }
                        else{
                            console.log(info)
                        }
                    })
                }
  