const venom = require('venom-bot');
const db = require('./helpers/mysql.js')

venom
  .create({
    session: 'Teste1',
    multidevice: false,
    headless: false
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });


function start(client){
    client.onMessage((message) => {
        if(message.body === "Hi" ) {
            client
                .sendText(message.from, "Olá sou seu Bot the Whatsapp, o que deseja fazer? \n\n 1-Qual seu objetivo? \n 2-Como entro em contato? \n 3-Qual sua origem?")
                .then((result) => {
                    console.log("Result: ", result);
                })
                .catch((erro) => {
                    console.error("Não foi possível responder o user: ", erro);
                })
        }
        else if(message.body === '1'){
            client
                .sendText(message.from, "No momento estou em fase de desenvolvimento, mas fui idealizado pensando em como ajudar diversos tipos de atendimentos ao cliente!")
                .then((result) =>{
                    console.log("Result: ", result);
                })
                .catch((erro) => {
                    console.error("Não foi possível responder o user: ", erro);
                })
        }
        else if(message.body === '2'){
            client
                .sendText(message.from, "Podemos continuar conversando por aqui, ou caso você deseje um contato pode ir no Github/JoaoMesquitaL ou Github/ThiagoReisFreitas")
                .then((result) =>{
                    console.log("Result: ", result);
                })
                .catch((erro) => {
                    console.error("Não foi possível responder o user: ", erro);
                })
        }
        else if(message.body === '3'){
            client
                .sendText(message.from, "Sou originado da biblioteca Venom Bot que permite que você inicie o desenvolvimento de um bot de Whatsapp atraves de tecnologia como NodeJS e Javascript")
                .then((result) =>{
                    console.log("Result: ", result);
                })
                .catch((erro) => {
                    console.error("Não foi possível responder o user: ", erro);
                })
        }
        else{
            client
                .sendText(message.from, "Desculpe, acho que não te entendi")
                .then((result) =>{
                    console.log("Result: ", result);
                })
                .catch((erro) => {
                    console.error("Interação invalida do usuario: ", erro);
                })
        }
    })
}

/*
function start(client) {
    console.log('Iniciando o Bot...');
    client.onMessage(async (msg) => {
        try{
            const user = msg.from.replace(/\D/g, '');
            const getUserFrom = await db.getUser(user);
            const keyword = msg.body.toLowerCase();
            const replyMessage = await db.getReply(keyword);
            const getUserStatus = await db.getStatus(user);
            if (getUserFrom === false){
                await db.setUser(user);
                const replyMessageWelcome = await db.getReply('oi');
                client.sendText(msg.from, replyMessageWelcome);
            }
            else if (msg.body === '5'){
                await db.setStatusOff(user);
                client.sendText(msg.from, 'ChatBot OFF');
            }
            else if (msg.body === '4'){
                await db.setStatusOn(user);
                client.sendText(msg.from, 'ChatBot ON');
            }
            else if(replyMessage !== false && getUserStatus === 'on'){
                client.sendText(msg.from, replyMessage);
            }
        }catch (e){
            console.log(e);
        }
    });
}
*/