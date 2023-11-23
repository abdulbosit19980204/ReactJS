const axios = require('axios');

const botToken = '6741809709:AAFlnWrLVsdLEaa2DBvNy4AMZfenGddr3F8';
const userId = 1209619850; // Replace with the actual user_id

async function getUserInfo() {
  try {
    const response = await axios.post(
      `https://api.telegram.org/bot${botToken}/getChat`,
      {
        chat_id: userId,
      }
    );

    const user = response.data.result;

    if (user) {
      console.log('User Information:');
      console.log('First Name:', user.first_name);
      console.log('Last Name:', user.last_name);
      console.log('Username:', user.username);
      console.log('User ID:', user.id);
      console.log('Profile Picture:', user.photo?.big_file_id);
    } else {
      console.log('User not found.');
    }
  } catch (error) {
    console.error('Error:', error.message || error);
  }
}

getUserInfo();
