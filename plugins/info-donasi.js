import fs from 'fs'
import { apivisit } from './kanghit.js'

let handler = async (m, { conn }) => {
let pp = fs.readFileSync('./thumbnail.jpg')
await conn.reply(m.chat, `ᴋᴀᴍᴜ ʙɪsᴀ ᴅᴏɴᴀsɪ ᴅɪ ɴᴏᴍᴏʀ ᴅɪʙᴀᴡᴀʜ ɪɴɪ
ᴀᴛᴀᴜ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ʟɪɴᴋ sᴀᴡᴇʀɪᴀ

┌ ◦ *ᴀxɪs* : 083181666350
│ ◦ *ᴀxɪs* : 083817914073
│ ◦ *ᴅᴀɴᴀ* : 083181666350
│ ◦ *ɢᴏᴘᴀʏ* : 083181666350
│ ◦ *ᴘᴏᴠᴏ* : 083181666350
└ ◦ *sᴀᴡᴇʀɪᴀ* : https://saweria.co/ReyzXd
`, { key: { fromMe: false,participant:"0@s.whatsapp.net", remoteJid: "status@broadcast"}, message: { orderMessage: { itemCount: 99999, status: 200, thumbnail: await conn.resize(pp, 100, 100), surface: 200, message: `ᴅᴏɴᴀsɪ ʙʏ ʀᴇʏᴢ`, orderTitle: 'ReyzXD', sellerJid: '0@s.whatsapp.net'}}, contextInfo: { forwardingScore :999, isForwarded: true }, sendEphemeral: true} )
await apivisit
}
handler.tags = ['info']
handler.command = /^dona(te|si)$/i
export default handler