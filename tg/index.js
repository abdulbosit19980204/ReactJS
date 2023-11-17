import express from 'express';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 3000;

const TOKEN = '6189703946:AAGb1TA2yDg-sdu0c_AIDn39_07AuzvlZgE';
const OWNER = 'your_owner_id';

let lastFrom = 0;
let lastId = 0;

app.use(bodyParser.json());

app.get('/', async (req, res) => {
  res.status(200).end();

  try {
    const update = req.body;
    const message = update.message;

    if (!message) {
      return;
    }

    let user = message.forward_from;

    if (!user) {
      if (!message.isForwardedFromChannel()) {
        user = message.from;
      }
    }

    const builder = [];

    if (user) {
      if (lastFrom === message.from.id && lastId === user.id) {
        return;
      }

      if (user.username) {
        builder.push(`@${user.username}\n`);
      }

      builder.push(`Id: ${user.id}\n`);
      builder.push(`First: ${user.first_name}\n`);

      if (user.last_name) {
        builder.push(`Last: ${user.last_name}\n`);
      }

      if (user.language_code) {
        builder.push(`Lang: ${user.language_code}\n`);
      }

      lastFrom = message.from.id;
      lastId = user.id;
    } else if (message.isForwardedFromChannel()) {
      const channel = message.forward_from_chat;

      if (channel.username) {
        builder.push(`@${channel.username}\n`);
      }

      builder.push(`Id: ${channel.id}\n`);
      builder.push(`Title: ${channel.title}\n`);

      if (message.forward_from_message_id !== 0 && channel.username) {
        builder.push(`https://t.me/${channel.username}/${message.forward_from_message_id}`);
      }
    }

    await sendMessage(message.from.id, builder.join(''));
  } catch (error) {
    console.error(error);
  }
});

async function sendMessage(chatId, text) {
  const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const params = {
    chat_id: chatId,
    text: text,
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });

  const data = await response.json();

  return data;
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
