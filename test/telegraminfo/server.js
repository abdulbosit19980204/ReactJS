import express from 'express';
import cors from 'cors';
import axios from "axios"

const app = express();
const port = 3001; // Choose any available port

const botToken = '6741809709:AAFlnWrLVsdLEaa2DBvNy4AMZfenGddr3F8'; // Replace with your actual bot token

app.get('/user/:userId',cors(), async (req, res) => {
  try {
    // const userId = 1209619850;
    const userId = req.params.userId;
    const response = await axios.post(
      `https://api.telegram.org/bot${botToken}/getChat`,
      {
        chat_id: userId,
      }
    );

    const user = response.data.result;
      console.log(user);
    if (user) {
      res.json({
        success: true,
        user: {
          id: user.id,
          firstName: user.first_name,
          lastName: user.last_name,
          username: user.username,
          profilePicture: user.photo?.small_file_id,
          type: user.type,
          active_usernames: user.active_usernames,
          bio: user.bio,
            small_file_id: user.photo.small_file_id,
            small_file_unique_id: user.photo.small_file_unique_id,
            big_file_id: user.photo.big_file_id,
            big_file_unique_id: user.photo.big_file_unique_id,
          
        },
      });
    } else {
      res.json({ success: false, message: 'User not found.' });
    }
  } catch (error) {
    console.error('Error:', error.message || error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
