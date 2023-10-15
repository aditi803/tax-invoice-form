import React, { useState } from 'react';

function UserInfo() {
  const [userInfo, setUserInfo] = useState({
    username: 'john_doe',
    fullName: 'John Doe',
    email: 'john@example.com',
    bio: 'A React enthusiast',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Save user information (e.g., send to a server).
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div className="user-info">
      <h2>User Info</h2>
      {isEditing ? (
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={userInfo.username}
            onChange={handleInputChange}
          />

          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={userInfo.fullName}
            onChange={handleInputChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userInfo.email}
            onChange={handleInputChange}
          />

          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            name="bio"
            value={userInfo.bio}
            onChange={handleInputChange}
          />
        </div>
      ) : (
        <div>
          <p><strong>Username:</strong> {userInfo.username}</p>
          <p><strong>Full Name:</strong> {userInfo.fullName}</p>
          <p><strong>Email:</strong> {userInfo.email}</p>
          <p><strong>Bio:</strong> {userInfo.bio}</p>
        </div>
      )}

      {isEditing ? (
        <button onClick={handleSaveClick}>Save</button>
      ) : (
        <button onClick={handleEditClick}>Edit</button>
      )}
    </div>
  );
}

export default UserInfo;