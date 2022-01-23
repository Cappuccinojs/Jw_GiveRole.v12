//express
const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => res.send('Yaro Botet Run Shod!'));
app.listen(port, () =>
    console.log(`Your app is listening a http://localhost/${port}`)
);

//---------------------

const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');
const Discord = require('discord.js');
const client = new Discord.Client();
dotenv.config();

const config = require('./config.json');
const antiAd = require('./anti-ad');

client.on('ready', async() => {
    console.log('The client is ready!');

    antiAd(client);

    const baseFile = 'command-base.js';
    const commandBase = require(`./commands/${baseFile}`);

    const readCommands = (dir) => {
        const files = fs.readdirSync(path.join(__dirname, dir));
        for (const file of files) {
            const stat = fs.lstatSync(path.join(__dirname, dir, file));
            if (stat.isDirectory()) {
                readCommands(path.join(dir, file));
            } else if (file !== baseFile) {
                const option = require(path.join(__dirname, dir, file));
                commandBase(client, option);
            }
        }
    };

    readCommands('commands');
});

client.login(process.env.TOKEN);