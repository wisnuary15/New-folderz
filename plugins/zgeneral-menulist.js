import moment from 'moment-timezone'
import PhoneNumber from 'awesome-phonenumber'
import fs from 'fs'
import fetch from 'node-fetch'
import { pickRandom } from '../lib/other-function.js'

let menulist = async (m, { conn, args }) => {
  const perintah = args[0] || 'tags'; // Default ke 'tags' jika tidak ada tag yang disebutkan
  const tagCount = {};
  const tagHelpMapping = {};

  Object.keys(global.plugins)
    .filter(plugin => !plugin.disabled)
    .forEach(plugin => {
      const tagsArray = Array.isArray(global.plugins[plugin].tags)
        ? global.plugins[plugin].tags
        : [];

      if (tagsArray.length > 0) {
        const helpArray = Array.isArray(global.plugins[plugin].help)
          ? global.plugins[plugin].help
          : [global.plugins[plugin].help];

        tagsArray.forEach(tag => {
          if (tag) {
            if (tagCount[tag]) {
              tagCount[tag]++;
              tagHelpMapping[tag].push(...helpArray);
            } else {
              tagCount[tag] = 1;
              tagHelpMapping[tag] = [...helpArray];
            }
          }
        });
      }
    });

  // Ambil informasi tentang plugin
  let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
    return {
      help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
      tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
      prefix: 'customPrefix' in plugin,
      limit: plugin.limit,
      premium: plugin.premium,
      enabled: !plugin.disabled,
    }
  });

  if (perintah === 'tags') {
    const daftarTag = Object.keys(tagCount)
      .sort()
      .join('\n│' + htjava + '. menulist ');
    const more = String.fromCharCode(8206)
    const readMore = more.repeat(4001)
    let _mpt
    if (process.send) {
      process.send('uptime')
      _mpt = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let mpt = clockString(_mpt)
    let name = m.pushName || conn.getName(m.sender)
    let p1 = './tumnil/1.jpg'
    let p2 = './tumnil/2.jpg'
    let p3 = './tumnil/3.jpg'
    let p4 = './tumnil/4.jpg'
    let p5 = './tumnil/5.jpg'
    let prn = `${pickRandom([p1,p2,p3,p4,p5])}`
    
    await conn.sendReact(m.chat, "🕒", m.key)
    await conn.sendReact(m.chat, "1⃣", m.key)
    await conn.sendReact(m.chat, "2⃣", m.key)
    await conn.sendReact(m.chat, "3⃣", m.key)
    await conn.sendReact(m.chat, "☑️", m.key)
    conn.sendMessage(m.chat, { document: fs.readFileSync("./package.json"),
      fileName: wm,
      mimetype: global.doc,
      fileLength: 99999999,
      pageCount: 999,  
      caption: `
╭─────═[ INFO USER ]═─────⋆
│╭───────────────···
┴│☂︎ *ɴᴀᴍᴇ:* ${name}
⬡│☂︎ *ᴘʀᴇғɪx:* [ . ]
┬╰────────────────···
┠─────═[ TODAY ]═─────⋆
│╭────────────────···
┴│    *${ucapan()}  ${name}*
⬡│☂︎ *ᴄʜᴀᴛ ʙᴀɴ:* ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}
⬡│☂︎ *ᴜsᴇᴇ ʙᴀɴ:* ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}
⬡│☂︎ *ᴅᴀᴛᴇ:* ${global.waktu}
┬│☂︎ *ᴜᴘᴛɪᴍᴇ:* ${global.bottime}
│╰────────────────···
┠─────═[ INFO BOT ]═─────⋆
│╭────────────────···
┴│☂︎ *ɴᴀᴍᴇ ʙᴏᴛ:* ᴋᴏɴᴇᴋᴏ ᴄʏᴢ
⬡│☂︎ *ᴄʀᴇᴀᴛᴏʀ* ʀᴇʏᴢ ʜᴀʏᴀɴᴀsɪ
⬡│☂︎ *ᴍᴏᴅᴇ:* ${global.opts['sᴇʟғ'] ? 'ᴘʀɪᴠᴀᴛᴇ' : 'ᴘᴜʙʟɪᴄ'}
⬡│☂︎ *ɴᴏ ᴏᴡɴ:* ${global.nomorown}
┬│☂︎ *ᴅᴀᴛᴀʙᴀsᴇ:* ${Object.keys(global.db.data.users).length}
│╰────────────────···
╰──────────═┅═──────────    
${readMore}\n╭━━━━━━━━┈─◂\n│≡ *TAG LIST*\n┴\n│${global.htjava} .menulist  ${daftarTag}\n╰━━━━━━━━┈─◂\n*Total Tag:${Object.keys(tagCount).length}*`, contextInfo: { externalAdReply: { showAdAttribution: true, title: wm, body: author, mediaType: 1, thumbnail: fs.readFileSync(prn), sourceUrl: 'https://reyzxd.com', renderLargerThumbnail: true } } }, { quoted: m, ephemeralExpiration: global.ephemeral });
  await conn.sendFile(m.chat, './mp3/old2.mp3', '', null, m, true) 
  } else if (tagCount[perintah]) {
    const daftarHelp = tagHelpMapping[perintah].map((helpItem, index) => {
      const premiumSign = help[index].premium ? '🅟' : '';
      const limitSign = help[index].limit ? 'Ⓛ' : '';
      return `.${helpItem} ${premiumSign}${limitSign}`;
    }).join('\n│' + pmenus + ' ');
    conn.sendMessage(m.chat, { document: fs.readFileSync("./package.json"),
      fileName: wm,
      mimetype: global.doc,
      fileLength: 99999999999999,
      pageCount: 10909143,  
      caption:  `╭━━━━━━━━┈─◂\n│≡ *${perintah}*\n├━━━━━━━━┈─◂\n│\n│${global.pmenus}${daftarHelp}\n╰━━━━━━━━┈─◂\n\n*Total Item:${tagHelpMapping[perintah].length}*`, contextInfo: { externalAdReply: { title: wm, body: author, mediaType: 1, thumbnail: fs.readFileSync('./tumnil/1.jpg'), sourceUrl: 'https://Javanese', renderLargerThumbnail: true } } }, { quoted: m, ephemeralExpiration: global.ephemeral });
          } else if (perintah === 'all') { // Menampilkan semua tag dan bantuan
    let name = m.pushName || conn.getName(m.sender)
    const more = String.fromCharCode(8206)
    const readMore = more.repeat(4001)
    const allTagsAndHelp = Object.keys(tagCount).map(tag => {
      const daftarHelp = tagHelpMapping[tag].map((helpItem, index) => {
        const premiumSign = help[index].premium ? '🅟' : '';
        const limitSign = help[index].limit ? 'Ⓛ' : '';
        return `.${helpItem} ${premiumSign}${limitSign}`;
      }).join('\n│' + pmenus + ' ');
      return `╭━━━━━━━━┈─◂\n│≡ ${tag}\n├━━━━━━━━┈─◂\n│\n│${daftarHelp}\n╰━━━━━━━━┈─◂`;
    }).join('\n');
    conn.sendMessage(m.chat, { document: fs.readFileSync("./package.json"),
      fileName: wm,
      mimetype: global.doc,
      fileLength: 99999999999999,
      pageCount: 10909143,  
      caption:  `✧──···[ 𝘿𝙖𝙨𝙝𝙗𝙤𝙖𝙧𝙙 ]···──✧
  ╭━━━━━━━━━━┈─✧
  ┴    
  │⬡ ${ucapan()} : ${name}
  │⬡ ᴘʀᴇғɪx : [ . ]
  │⬡ ᴍᴏᴅᴇ : ${global.opts['self'] ? 'Private' : 'ᴘᴜʙʟɪᴄ'}
  │⬡ *${Object.keys(global.db.data.users).length}* ᴘᴇɴɢɢᴜɴᴀ 
  │⬡ *${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}* ᴄʜᴀᴛ ᴛᴇʀʙᴀɴɴᴇᴅ 
  │⬡ *${Object.entries(global.db.data.users).filter(user => user[1].banned).length}* ᴘᴇɴɢɢᴜɴᴀ ᴛᴇʀʙᴀɴɴᴇᴅ 
  ┬
  ├━━━━━━━━━━┈─⋆
  │ ▸ *ʙᴏᴛ ɴᴀᴍᴇ: ᴋᴏɴᴇᴋᴏ ᴄʏᴢ*
  ┴ ▸ *ᴏᴡɴᴇʀ: ʀ.ᴇ.ʏ.ᴢ.x.ᴅ*
  ✧
  ┬ 📌 🇵‌🇮‌🇳‌🇳‌🇪‌🇩‌ :
  │ ʙᴇʀɪ ᴊᴇᴅᴀ ʏᴀʜ ᴋᴀᴋ ^ω^
  ╰━━━━━━━━━━┈─◂
${readMore}\n╭━━━━━━━━┈─◂\n│≡ *TAG LIST AND HELP*\n╰━━━━━━━━┈─◂\n\n${allTagsAndHelp}\n\n*Total Tags:${Object.keys(tagCount).length}*`, contextInfo: { externalAdReply: { title: wm, body: author, mediaType: 1, thumbnail: fs.readFileSync('./tumnil/1.jpg'), sourceUrl: 'https://Javanese', renderLargerThumbnail: true } } }, { quoted: m, ephemeralExpiration: global.ephemeral });
  } else {
    conn.sendMessage(m.chat, `Tag '${perintah}' tidak ditemukan. Gunakan 'menulist tags' atau 'menulist all' untuk melihat tag yang tersedia.`, { quoted: m, ephemeralExpiration: global.ephemeral });
  }
}

menulist.help = ['menulist']
menulist.tags = ['info']
menulist.command = ['menulist']
export default menulist

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
  const hour_now = moment.tz('Asia/Jakarta').format('HH')
  var ucapanWaktu = 'Ohayou...'
  if (hour_now >= '03' && hour_now <= '10') {
    ucapanWaktu = 'Ohayou...'
  } else if (hour_now >= '10' && hour_now <= '15') {
    ucapanWaktu = 'Konnichiwa...'
  } else if (hour_now >= '15' && hour_now <= '17') {
    ucapanWaktu = 'Konnichiwa...'
  } else if (hour_now >= '17' && hour_now <= '18') {
    ucapanWaktu = 'Konbanwa...'
  } else if (hour_now >= '18' && hour_now <= '23') {
    ucapanWaktu = 'Konbanwa...'
  } else {
    ucapanWaktu = 'Konbanwa'
  }	
  return ucapanWaktu
}