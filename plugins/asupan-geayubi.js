import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = `https://api.fgmods.xyz/api/img/girl?apikey=Pa5SYPbA`
	conn.sendFile(m.chat, url, '', '_Random_', m)
}
handler.command = /^(geayubi)$/i
handler.tags = ['asupan']
handler.help = ['geayubi']
handler.limit = true
handler.premium = true
export default handler