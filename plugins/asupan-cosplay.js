import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = `https://api.ibeng.tech/api/sfw/cosplay?apikey=${global.ibeng}`
	conn.sendFile(m.chat, url, '', '_Random Cosplay_', m)
}
handler.command = /^(cosplay)$/i
handler.tags = ['random']
handler.help = ['cosplay']
handler.limit = true
export default handler