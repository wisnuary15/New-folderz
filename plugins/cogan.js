import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = `https://api.lolhuman.xyz/api/random/cogan?apikey=${global.lolkey}`
	conn.sendFile(m.chat, url, 'anu.jpg', '_Nih Kak_', m)
}
handler.command = /^(cogan)$/i
handler.tags = ['random']
handler.help = ['cogan']
handler.premium = false
handler.limit = true
 
export default handler