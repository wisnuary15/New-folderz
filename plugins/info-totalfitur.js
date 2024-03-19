import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let fitur = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length
let txt = `*乂  B O T  -  F E A T U R E*\n\n`
      txt += `	• *ᴛᴏᴛᴀʟ* : ${fitur.length}\n`
      txt += `  • *ᴄʀᴇᴀᴛᴏʀ* : ʀᴇʏᴢxᴅ\n`
      txt += author
   await conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'IDR',
      amount1000: fitur.length * 1000,
      requestFrom: '0@s.whatsapp.net',
      noteMessage: {
      extendedTextMessage: {
      text: txt,
      contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
}
handler.help = ['totalfitur']
handler.tags = ['main']
handler.command = /^(totalfitur)$/i
export default handler