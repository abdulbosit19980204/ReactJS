const express = require('express');
const axios = require('axios');
const TelegramBot = require('node-telegram-bot-api');

const app = express();
const port = 3001;

const botToken = 'YOUR_BOT_TOKEN';
const bot = new TelegramBot(botToken, { polling: true });

app.use(express.json());

app.get('/channel/:username', async (req, res) => {
  const channelUsername = req.params.username;

  try {
    // Get channel information
    const chat = await bot.getChat(`@${channelUsername}`);
    const chatId = chat.id;

    // Get channel members
    const chatMembers = await bot.getChatMembers(chatId);

    const membersInfo = [];
    for (const member of chatMembers) {
      const user = member.user;
      const userDetails = await bot.getUser(user.id);
      membersInfo.push({
        id: userDetails.id,
        username: userDetails.username,
        firstName: userDetails.first_name,
        phoneNumber: userDetails.phone_number || 'N/A',
      });
    }

    res.json({ success: true, members: membersInfo });
  } catch (error) {
    console.error('Error:', error.message || error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
