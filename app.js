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
                .sendText(message.from, "Sucesso")
                .then((result) => {
                    console.log("Result: ", result);
                })
                .catch((erro) => {
                    console.error("Error whem sending: ", erro);
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