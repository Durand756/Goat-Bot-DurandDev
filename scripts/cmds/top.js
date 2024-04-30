module.exports = {
 config: {
 name: "top",
 version: "1.0",
 author: "Durand",
 role: 0,
 shortDescription: {
 en: "Top 20 des utilisateurs les plus riches$"
 },
 longDescription: {
 en: ""
 },
 category: "group",
 guide: {
 en: "{pn}"
 }
 },
 onStart: async function ({ api, args, message, event, usersData }) {
 const allUsers = await usersData.getAll();
 
 const topUsers = allUsers.sort((a, b) => b.money - a.money).slice(0, 20);
 
 const topUsersList = topUsers.map((user, index) => `${index + 1}. ${user.name}: ${user.money}`);
 
 const messageText = `Top 20 des utilisateurs les plus riches$🥇:\n${topUsersList.join('\n')}`;
 
 message.reply(messageText);
 }
};
