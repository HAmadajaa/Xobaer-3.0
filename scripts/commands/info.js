module.exports.config = {
    name: "admin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`
--------------------------------------------
𝐍𝐚𝐦𝐞       : Ahmad
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : Xobaer Ahmad
𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧   : 𝐈𝐬𝐥𝐚𝐦
𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: Bangladesh,Barisal,Kashipur
𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: Egpyt,Ismailia,EL Salam
𝐆𝐞𝐧𝐝𝐞𝐫.   : 𝐌𝐚𝐥𝐞
𝐀𝐠𝐞           : 𝟏7+
𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : 𝐒𝐢𝐧𝐠𝐥𝐞
𝐖𝐨𝐫𝐤        : 𝐒𝐭𝐮𝐝𝐞𝐧𝐭
𝐆𝐦𝐚𝐢𝐥       : officialxobaer2007@gmail.com
𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩: wa.me/+201061284766
𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦  : t.me/+01061284766
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/XobaerAhmad?mibextid=ZbWKwL`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://scontent.fcai19-1.fna.fbcdn.net/v/t39.30808-6/449452446_995648142264355_3001580873434855501_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ar1up5L4mAAQ7kNvgFhl4gA&_nc_ht=scontent.fcai19-1.fna&oh=00_AYCc_14saEhnP9MIbniehqFakTu8xSfAK6DJ_zKjddKqJg&oe=66CC2AF5`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
}
