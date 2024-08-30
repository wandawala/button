/*
=====================================================================

   UCIHA ITACHI PROJECT
 2024 - 2025

=====================================================================
*/
require('./Pengaturan/Admin/settings.js')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys")
const axios = require('axios')
const FileType = require('file-type')
const fetch = require('node-fetch')
const crypto = require('crypto')
const fs = require('fs')
const scp2 = require('./screp/scraper2')
const { sizeFormatter} = require("human-readable")
const format = sizeFormatter()
const os = require('os');
const { exec } = require("child_process");
const speed = require('performance-now');
const { TelegraPH } = require("./screp/TelegraPH")
const { mongodb } = require("./Pengaturan/function/mongoDB.js");
const ytdl = require('./screp/ytdl.js')
const util = require('util')
const chalk = require('chalk')
const baileys = require('@whiskeysockets/baileys')
const fg = require('api-dylux')
const moment = require('moment-timezone');
const md5 = require('md5');
//=================================================//
const { clockString, tanggal, getTime, isUrl, sleep, runtime, fetchJson, getBuffer, jsonformat, reSize, generateProfilePicture } = require('./Pengaturan/function/myfunc')
const ms = toMs = require('ms');
const { color, bgcolor } = require('./Pengaturan/function/color')
//=================================================//
module.exports = danz = async (danz, m, chatUpdate, store) => {
try {
  const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const bady = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') ? appenTextMessage(JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id, chatUpdate) : (m.mtype == 'templateButtonReplyMessage') ? appenTextMessage(m.msg.selectedId, chatUpdate) : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''

async function appenTextMessage(text, chatUpdate) {
let messages = await generateWAMessage(m.chat, { text: text, mentions: m.mentionedJid }, {
userJid: danz.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, danz.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
danz.ev.emit('messages.upsert', msg)
}
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '.'

// =================================================//

const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'VideoMessage') && m.message.VideoMessage.caption ? m.message.VideoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
const isGroup = m.key.remoteJid.endsWith('@g.us')
const command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase();
const args = body.trim().split(/ +/).slice(1);
const { type, quotedMsg, mentioned, now, fromMe } = m
const isCmd = body.startsWith(prefix)
const from = m.key.remoteJid
const pushname = m.pushName || "No Name"
const botNumber = await danz.decodeJid(danz.user.id)
const groupMetadata = m.isGroup ? await danz.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const groupMembers = m.isGroup ? groupMetadata.participants : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
 
// ====================================== //		 
 
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const jam = moment.tz('asia/Jakarta').format('HH:mm:ss')
const tanggal = moment().tz("Asia/Jakarta").format("ll")
const dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
const isMedia = /image|document|file|video|sticker|audio/.test(mime)
const isImage = (type == 'imageMessage')
const isVideo = (type == 'VideoMessage')
const isAudio = (type == 'audioMessage')
const isSticker = (type == 'stickerMessage')
const isDocument = (type == 'documentMessage')
const isFile = (type == 'fileMessage')
const danzfiture = () =>{
var mytext = fs.readFileSync("./case.js").toString()
var numUpper = (mytext.match(/case '/g) || []).length
return numUpper
        }
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
const calender = d.toLocaleDateString("id", {
day: 'numeric',
month: 'long',
year: 'numeric'
})
// ====================================== //		
		
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('VideoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const isOwner = [`${owner}@s.whatsapp.net`] == sender ? true : [`${owner}@s.whatsapp.net`].includes(sender) ? true : false
const senderNumber = sender.split('@')[0] 
const arg = budy.trim().substring(budy.indexOf(" ") + 1);
const arg1 = arg.trim().substring(arg.indexOf(" ") + 1);	  
const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)


// ====================================== //		
const VoiceNote = JSON.parse(fs.readFileSync('./media/database/vn.json'))
const Sticker = JSON.parse(fs.readFileSync('./media/database/sticker.json'))
const Image = JSON.parse(fs.readFileSync('./media/database/image.json'))
const Video = JSON.parse(fs.readFileSync('./media/database/video.json'))
const Doc = JSON.parse(fs.readFileSync('./media/database/doc.json'))
const Zip = JSON.parse(fs.readFileSync('./media/database/zip.json'))
const Apk = JSON.parse(fs.readFileSync('./media/database/apk.json'))

//========================================//
const {
    smsg,
    getGroupAdmins,
    formatp,
    formatDate,
    getTime,
    isUrl,
    sleep,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    runtime,
    fetchJson,
    getBuffer,
    json,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    fetchBuffer,
    buffergif,
    totalcase
} = require('./Pengaturan/function/myfunc1')
//========================================//

var mdu = ['red','green','yellow','blue','magenta','cyan','white']
var halalu = mdu[Math.floor(Math.random() * mdu.length)]
var mdo = ['red','green','yellow','blue','magenta','cyan','white']
var halalo = mdo[Math.floor(Math.random() * mdo.length)]
var mdi = ['red','green','yellow','blue','magenta','cyan','white']
var halali = mdi[Math.floor(Math.random() * mdi.length)]
var mda = ['red','green','yellow','blue','magenta','cyan','white']
var halala = mda[Math.floor(Math.random() * mda.length)]
var mde = ['red','green','yellow','blue','magenta','cyan','white']
var halale = mde[Math.floor(Math.random() * mde.length)]
if (isCmd) {
console.log(chalk.white.bgBlue.bold('danzH'), color(`[ PESAN BARU ]`, `${halalu}`), color(`DARI`, `${halalo}`), color(`${pushname}`, `${halali}`), color(`PESAN :`, `${halala}`), color(`${body}`, `${halale}`))
}
async function senddanzMessage(chatId, message, options = {}){
let generate = await generateWAMessage(chatId, message, options)
let type2 = getContentType(generate.message)
if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
return await danz.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}
const ftoko = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `status@broadcast` } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync('./media/quoted.jpg')},"title": `${pushname}`,"description": `${ucapanWaktu} kak`,"currencyCode": "IDR", "priceAmount1000": `${pushname}`, "retailerId": `Rp10`,"productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./media/thumb.jpeg')}}}
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
//poling 
function checkDuplicate(arr) {
    return new Set(arr).size !== arr.length
}
 
global.Kyuu = '`'
global.hiasan =`•`
global.footer = 'Made by Wanbotz'


const hours = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(hours < "23:59:00"){
var waktuucapan = 'Selamat Malam 🌃'
}
if(hours < "19:00:00"){
var waktuucapan = 'Selamat Petang 🌆'
}
if(hours < "18:00:00"){
var waktuucapan = 'Selamat Sore 🌅'
}
if(hours < "15:00:00"){
var waktuucapan = 'Selamat Siang 🏙'
}
if(hours < "10:00:00"){
var waktuucapan = 'Selamat Pagi 🌄'
}
if(hours < "05:00:00"){
var waktuucapan = 'Selamat Subuh 🌉'
}
if(hours < "03:00:00"){
var waktuucapan = 'Jam segini kok belum Tidur kak?'
}

const ytmp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
ytdl(Link, {
filter: 'audioonly'
}).pipe(fs.createWriteStream(mp3File)).on('finish', async () => {
await danz.sendMessage(m.chat, {
audio: fs.readFileSync(mp3File),
mimetype: 'audio/mp4'
}, {
quoted: m
})
})
} catch (err) {
m.reply(`${err}`)
}
}

//=================================================//
switch (command) {
case 'menu' :{
let { proto, generateWAMessageFromContent, prepareWAMessageMedia } = require('@whiskeysockets/baileys')

let sections = [{
title: `Bot Menu`, 
highlight_label: `NURZ-MD`,
rows: [{
title: `All Menu📚`,
description: `View All Bot Menu List`, 
id: `.menu2`
},
{
title: `Tools Menu🔧`,
description: `View Tools Menu`, 
id: `.tolsmenu`
}]
}]

let listMessage = {
    title: `Menu`, 
    sections
};

let msgs = generateWAMessageFromContent(m.from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `${Kyuu}Hi ${pushname} Please report the owner if there is an error${Kyuu}\n> *BOTNAME :Nurz*
> *INFO TOTAL FITUR : ${danzfiture()}*
> *DATE : ${calender}*
> *VERSION : 1.0*\n\n ${Kyuu}Simple Menu${Kyuu}\n> .spotify\n> .tiktok\n> .youtube\n> .openai    
            `
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: `©Wanbotz`
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: `*[INFORMATION]*`,
            subtitle: `©Wanbotz`,
            hasMediaAttachment: false
          }),
            
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
           ],
          })
        })
    }
  }
}, {})
 danz.relayMessage(m.key.remoteJid, msgs.message, {
  messageId: m.key.id
})
}
break
                case 'autoai':{
  danz.autoai = danz.autoai ? danz.autoai : {};

 if (!text) return m.reply(`*• Example:* .autoai *[on/off]*`);

 if (text == "on") {
 danz.autoai[m.chat] = {
 pesan: []
 }
 m.reply("[ ✓ ] Success create session chat")
 } else if (text == "off") {
 delete danz.autoai[m.chat]
 m.reply("[ ✓ ] Success delete session chat")
 }}
 break
//=================================================// 
default:
danz.sindy = danz.autoai ? danz.autoai : {};
if (m.isBaileys && m.fromMe) return;
if (!m.text) return
if (!danz.sindy[m.chat]) return;

if (
    m.text.startsWith(".") ||
    m.text.startsWith("#") ||
    m.text.startsWith("!") ||
    m.text.startsWith("/") ||
    m.text.startsWith("\\/")
) return

if (danz.sindy[m.chat] && m.text) {
    let name = danz.getName(m.sender)
    await danz.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});
    
    if (!danz.sindy[m.chat].pesan || !Array.isArray(danz.sindy[m.chat].pesan)) {
        danz.sindy[m.chat].pesan = [];
    }

    const messages = [
        ...danz.sindy[m.chat].pesan,
        { role: "system", content: `"Kamu bernama Silvia berumur 18 kamu adalah asistennya yang dapat menjawab segala pertanyaan, gunakan bahasa gaul lu gw saat menjawab, gunakan emoji pada saat ingin menjawab pertanyaan, kamu memiliki sifat cuek namun feminin seperti seorang wanita, kamu tidak memiliki pacar, jika lawan bicaramu menggunakan kata toxic kamu juga bisa menggunakannya, jika mendapat pertanyaan soal tugas kamu bisa bantu jawab,jika kamu di suruh mencari gambar maka kamu bisa mencarinya, jika kamu ditanya tenpat tinggal jawab saja kalau kamu tinggal di ponorogo jatim deket rumah owner,jika kamu di tanya siapa oramg paling coll di dunia maka kamu menjawab orang yang paling coll adalah owner mu yaitu danz, jika lawan bicaramu menanyakan resep maka kamu bisa menjawabnya dengan mengirim resep makanan yang di minta,jika kamu di tanya bisa buat sticker maka kamu bisa menjawab bisa membuatnya, jika kamu di suruh mengambil fitur oleh owner maka kamu bisa melakukannnya,jika kamu di suruh add member ke dalam grup maka kamu bisa memasukkan nya, jika kamu di tanya bisa merubah gambar menjadi url maka kamu bisa, jika kamu di tanya mencari lagu atau musik maka kamu bisa mencatinya jika kamu disuruh tentang tutup group atau buka group kamu bisa jawab dengan berhasil group sudah tertutup/terbuka dan jika kamu disuruh mencari atau membuat sesuatu perhatikan fuction di system,nama ownermu adalah danz atau bisa di panggil nurz, nama lawan bicara mu adalah *${pushname}* Tambahkan ucapan ${waktuucapan}"` },
        { role: "user", content: `${m.body}` }
    ];

    try {
        const response = await axios.post("https://deepenglish.com/wp-json/ai-chatbot/v1/chat", {
            messages
        });

        const responseData = response.data;
        const hasil = responseData;
        await danz.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});
        m.reply(hasil.answer);
        danz.sindy[m.chat].pesan = responseData.messages;
       if (/add member|member/i.test(hasil.answere)) {
       if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (!isGroup) return m.reply('Kusus grup')
if (!isBotGroupAdmins) return m.reply('bot bukan admin')
if(!Input) return m.reply("Tag/Mention/Masukan nomer target")
if (Input.startsWith('08')) return m.reply('Awali nomor dengan 62')
await danz.groupParticipantsUpdate(from, [Input], 'add').then((res) =>{
if(res[0].status == 200) m.reply(`Berhasil menambahkan ${Input.split("@")[0]} ke dalam group ${groupName}`)
if(res[0].status == 403) m.reply(`Gagal menambahkan ${Input.split("@")[0]} ke dalam group ${groupName}`)
}).catch((err) => m.reply(jsonformat(err)))
       }
       if (/cari gambar|gambar/i.test(hasil.answer)) {
       let { pinterest } = require('./screp/scraper1')
anutrest = await pinterest(text)
result = anutrest[Math.floor(Math.random() * anutrest.length)]
danz.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
       }
        if (/buat remini|remini/i.test(hasil.answare)) {
        if (!/image/.test(mime)) return m.reply(`Send/Reply Photos With Captions ${prefix + command}`)
const { remini } = require('./screp/remini')
let media = await quoted.download()
let proses = await remini(media, "enhance")
danz.sendMessage(m.chat, { image: proses, caption: mess.success}, { quoted: m})
        }
        if (/buat sticker|sticker/i.test(hasil.answer)) {
            // Deklarasi mime
            let mime = 'image/jpeg'; // Misalnya mime adalah image/jpeg
            if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await danz.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
            }
        }
        
        
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}
        //m.m.reply('Maaf, saya tidak mengerti perintah tersebut. Silakan gunakan perintah yang tersedia.');
if (budy.startsWith('<')) {
if (!isOwner) return
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}

if (budy.startsWith('vv')) {
if (!isOwner) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}

if (budy.startsWith('uu')){
if (!isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}

if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
danz.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}
} catch (err) {
console.log(util.format(err))
let e = String(err)
danz.sendMessage(`${owner}@s.whatsapp.net`, { text: "Hey there is an error:" + util.format(e), 
contextInfo:{
forwardingScore: 5, 
isForwarded: true
}})
}
} 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update ${__filename}`))
  delete require.cache[file]
  require(file)
})