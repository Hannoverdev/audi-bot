const { Client, RichEmbed } = require('discord.js');

const client = new Client();

client.on('ready', () => {
    console.log('Bot Conectado!');
    console.log('Logged In as', client.user.tag)
    client.user.setStatus('online'); // online, idle, invisible, dnd

    console.log('Bot status: ', client.user.presence.status);

    // Bot sending a Message to a text channel called test
    const testChannel = client.channels.find(x => x.name === 'test')
    console.log(testChannel)
    // client.channels.find(c => c.name === 'test').send('Hello Server!')

});

// Bot listenning messages
client.on('message', msg => {
    console.log(msg.content)
    if (msg.content === '!bmw') {
        msg.reply('noo por dios que asco :face_vomiting: no vuelvas a mentarlo')
    }

    if (msg.content === '!hola') {
        msg.channel.send(`Que Quieres Bro ${msg.author}`);
    }

    if (msg.content.includes('!quien-eres')) {
        msg.channel.send('soy bot audi y soy un fresko :cold_face: Viva Cristo Rey');
    }

    if (msg.content === '!que-ves') {
        msg.channel.send('https://pornhub.com/');
    }

    if (msg.content === '!comandos') {
        msg.channel.send('Mostrando comandos: hola, bmw, quien-eres, que-ves, borrar');
    }

    // Deleting 100 messages
    if (msg.content.startsWith('!borrar')) {
        async function clear() {
            try {
                // await msg.delete();
                const fetched = await msg.channel.fetchMessages({limit: 99});
                msg.channel.bulkDelete(fetched);;
                console.log('Messages deleted');
            }
            catch (e) {
                console.log(e);
            }
        }
        clear();
    }
});


const token = 'token-discord';
client.login(token);
