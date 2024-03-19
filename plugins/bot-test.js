import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `*ᴀᴘᴀ ᴄᴏʙᴀ ʙᴀᴛ ʙᴏᴛ ʙᴀᴛ ʙᴊɪʀ ғᴜᴄᴋ ʏᴏᴜ ʙᴀʙʏ*\n@${m.sender.split('@')[0]}`
await conn.reply(m.chat, info, m, { contextInfo: { mentionedJid: [m.sender],forwardingScore: 256,
      showAdAttribution: true, externalAdReply: { title: author, body: bottime, sourceUrl: syt, thumbnail: fs.readFileSync('./thumbnail.jpg') }}})
}
handler.customPrefix = /^(tes|tess|test|bot)$/i
handler.command = new RegExp

export default handler