const {Client, Attachment} = require ('discord.js');
const bot = new Client();

const token ='NjUwODg5MTIxNDY3OTkwMDM5.XehYPw.VnKRkbdO3FohZoFsO39xtZg3HoI';

const PREFIX = ';';

bot.on('ready', () =>{
    console.log('This Bot is Online');


    bot.on('message',message=>{

      let args  = message.content.substring(PREFIX.length).split(" "); 

      switch(args[0]){
           case 'gay':
               message.reply('Islas server is gay');
            break;

                 case 'Supergay':
                        const attachment = new Attachment ('https://cdn.discordapp.com/attachments/616297310585880723/651215226464632842/image0.png%27')
                        message.channel.send(message.author, attachment);
                         case 'help':
                            message.reply('Ask Icestorm#6428 or a mod for help!');
                        break;
                            case 'Unblocked':
                                message.reply('if you have a website thats unblocked please fill out the form https://forms.gle/1ehnVobtggix58CK7');
                             break;
       ;}
    })
})

bot.login(token);