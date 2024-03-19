var handler = async (m, {conn, text, usedPrefix, command}) => {

const regex = /x/g
  
if (!text) throw '*⚠️ ᴍᴀsᴜᴋᴋᴀɴ ɴᴏᴍᴏʀ ɴʏᴀ! *'
if (!text.match(regex)) throw `*❕ ᴇxᴀᴍᴘʟᴇ:*\n${usedPrefix + command} 6283181666350x*`
let random = text.match(regex).length
let total = Math.pow(10, random)
let array = []
for (let i = 0; i < total; i++) {
let list = [...i.toString().padStart(random, '0')]
let result = text.replace(regex, () => list.shift()) + '@s.whatsapp.net'
if (await conn.onWhatsApp(result).then((v) => (v[0] || {}).exists)) {
let info = await conn.fetchStatus(result).catch((_) => {})
array.push({exists: true, jid: result, ...info})
} else {
array.push({exists: false, jid: result})}}
let txt = 'ʀᴇsɢɪᴛᴇʀ\n\n' + array.filter((v) => v.exists).map((v) => `• ᴛᴀɢ: wa.me/${v.jid.split('@')[0]}\n*• ʙɪᴏ:* ${v.status || 'Sin descripcion'}\n*• Fecha:* ${formatDate(v.setAt)}`).join('\n\n') + '\n\n*ɴᴏ ʀᴇɢɪsᴛᴇʀ*\n\n' + array.filter((v) => !v.exists).map((v) => v.jid.split('@')[0]).join('\n');
m.reply(txt)

}
handler.help = ['nowa']
handler.tags = ['nowa']
handler.command = /^nowa$/i

export default handler

function formatDate(n, locale = 'id') {
var d = new Date(n)
return d.toLocaleDateString(locale, {timeZone: 'Asia/Jakarta'})
}