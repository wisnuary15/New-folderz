import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return conn.reply(m.chat, `*⚠️ LU SALAH HARUNYA*\n\n❕ EXAMPLE\n*${usedPrefix + command} https://youtu.be/xxxxx*`, m)
conn.sendReact(m.chat, "🦊", m.key)
await conn.reply(m.chat, `*🚀 LOADING KONTOL*`, m)
try {
let qu = args[1] || '360'
let q = qu + 'p'
let v = args[0]
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v))
const dl_url = await yt.video[q].download()
const ttl = await yt.title
const size = await yt.video[q].fileSizeH
await await conn.sendMessage(m.chat, { video: { url: dl_url }, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `*📑 TITLE*\n${ttl}\n\n*📊 SIZE*\n${size}`, thumbnail: await fetch(yt.thumbnail) }, { quoted: m })
} catch {
try {
let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkey}&url=${args[0]}`)    
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
let n2 = lolh.result.link
let n3 = lolh.result.size
let n4 = lolh.result.thumbnail
m.react(done)
await conn.sendMessage(m.chat, { video: { url: n2 }, fileName: `${n}.mp4`, mimetype: 'video/mp4', caption: `*📑 TITLE*\n${n}\n\n*📍 SIZE*\n${n3}`, thumbnail: await fetch(n4) }, { quoted: m })
} catch {
await conn.reply(m.chat, `*⚠️ ERROR KONTOL*`, m)
m.react(error)}
}

}
handler.help = ['ytv']
handler.tags = ['downloader']
handler.command = /^fgmp4|dlmp4|getvid|yt(v|mp4)?$/i 

export default handler