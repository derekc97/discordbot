require("dotenv").config();
const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
})

client.on("ready", (c)=> {
    console.log(`${c.user.tag} is online.`);
})

client.on("messageCreate", (msg) => {
    if (msg.author.bot) {
        return;
    } else 
//if any message, bot will say hello.
    if (msg.content) {
        msg.reply("Hello!");
    }
})

client.login(process.env.TOKEN);
