import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { userInfo } from '../../redux/slices/auth';

function UserInfo() {
  const dispatch = useDispatch()
  // const [userInfo, setUserInfo] = useState({
  //   username: 'john_doe',
  //   fullName: 'John Doe',
  //   email: 'john@example.com',
  //   bio: 'A React enthusiast',
  // });
   const [user, setUser] = useState({
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
    setUser({ ...user, [name]: value });
  };

  const getUser = () => {
    let params = {

    }
    dispatch(userInfo({
      ...params, cb(res) {
        if (res.status) {
          console.log(res,"User details")
        }
      }
    }))
  }

  useEffect(() => {
    getUser()
  }, [])

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
            value={user.username}
            onChange={handleInputChange}
          />

          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={user.fullName}
            onChange={handleInputChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          />

          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            name="bio"
            value={user.bio}
            onChange={handleInputChange}
          />
        </div>
      ) : (
        <div>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Full Name:</strong> {user.fullName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Bio:</strong> {user.bio}</p>
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