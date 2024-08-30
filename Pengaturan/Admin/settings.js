global.chalk = require("chalk")
global.fs = require("fs")

//.                [ SETTING OWNER ]
//=================================================//
global.mongoURL = "mongodb+srv://kiicodehosting:LK2VdVCY6u4zdilJ@cluster0.5qngav6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.owner = ['6283169848512']
global.botNumber = '6285142748404'
global.gambar = 'https://telegra.ph/file/9ad1d17ab910a88f9559c.jpg'
global.author = 'YT : Danz Ofc'
//=================================================//

//=================================================//
global.mess = {
    wait: 'Loading...',
    succes: 'Done',
    admin: 'Gagal, Khusus Admin Group',
    botAdmin: 'Gagal, Bot Bukan Admin',
    owner: 'Gagal, Khusus Developer',
    group: 'Gagal, Fitur Untuk Grup',
    private: 'Gagal, Fitur Untuk Chat Pribadi',
    bot: 'Gagal, Bot Number User Special Features!!!',
    error: 'Eror...',    
    text: 'Gagal, Text Nya Mana?',
}
//=================================================//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})