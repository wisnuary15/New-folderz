import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = `https://api.ibeng.tech/api/asupan/image/japan?apikey=${global.ibeng}`
	conn.sendFile(m.chat, url, 'anu.jpg', '_Nih Kak_', m)
}
handler.command = /^(jepang)$/i
handler.tags = ['random']
handler.help = ['jepang']
handler.premium = false
handler.limit = true
 
export default handler