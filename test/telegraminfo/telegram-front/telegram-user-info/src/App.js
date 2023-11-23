import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [userId, setUserId] = useState('');
  const [user, setUser] = useState(null);
  const botToken = '6741809709:AAFlnWrLVsdLEaa2DBvNy4AMZfenGddr3F8';

  const handleGetUser = async () => {
    try {
      // const response = await axios.get(`http://localhost:3001/user/${userId}`);
      const response = await axios.get(`https://telegram-info-server.onrender.com/user/${userId}`);
      console.log('Response:', response.data); // Log the response
      setUser(response.data.user);
    } catch (error) {
      console.error('Error:', error.message || error);
    }
  };
  return (
    <div style={{margin: 50, padding: 50}}>
      <h1>Telegram User Info</h1>
      <div>
        <label>
          Enter User ID:
          <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
        </label>
        <button onClick={handleGetUser}>Get User Info</button>
      </div>
      {user && (
        <div>
          <h2>User Information</h2>
          <p>ID: {user.id}</p>
          <p>First Name: {user.firstName}</p>
          <p>Last Name: {user.lastName}</p>
          <p>Username: {user.username}</p>
          <p>Type: {user.type}</p>
          <p>Active usernames: {user.active_usernames}</p>
          <p>BIO: {user.bio}</p>
          <p>photo small_file_id: {user.small_file_id}</p>
          <p>photo small_file_unique_id: {user.big_file_unique_id}</p>
          <p>photo big_file_id: {user.big_file_id}</p>
          <p>photo big_file_unique_id: {user.small_file_id}</p>
          {user.profilePicture && (
            <img src={`https://api.telegram.org/file/bot${botToken}/${user.profilePicture}`} alt="Profile" />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
