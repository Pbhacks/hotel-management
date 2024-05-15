import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, updateEmail, updatePassword, updateProfile } from 'firebase/auth';
import { getStorage, ref } from 'firebase/storage';
import { getDatabase, ref as databaseRef, update } from 'firebase/database';
import { firebaseConfig } from '../Login/firebase';

// Initialize the Firebase app
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const database = getDatabase(app);

function ProfileSettings() {
  const [user, setUser] = useState(null);
  const [profilePic, setProfilePic] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [otherDetails, setOtherDetails] = useState('');
  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setEmail(user.email);
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfilePic(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleDateOfBirthChange = (event) => {
    setDateOfBirth(event.target.value);
  };

  const handleOtherDetailsChange = (event) => {
    setOtherDetails(event.target.value);
  };

  const handleSaveChanges = async () => {
    try {
      // Update email if it has changed
      if (email !== user.email) {
        await updateEmail(auth.currentUser, email);
      }

      // Update password if it has changed and matches the confirmed password
      if (password && password === confirmPassword) {
        await updatePassword(auth.currentUser, password);
      }

      // Update user profile
      await updateProfile(auth.currentUser, {
        photoURL: profilePic, // Update the profile picture with the base64-encoded string
        displayName: otherDetails, // Update the display name with the "Other Details" field
      });

      // Update other user details in the Firebase Realtime Database or Firestore
      const userId = auth.currentUser.uid;
      const userRef = databaseRef(database, `users/${userId}`);
      await update(userRef, {
        dateOfBirth, // Update the date of birth
        otherDetails, // Update the "Other Details" field
      });

      // Show a success message or perform any other necessary actions
      console.log('Changes saved successfully!');
    } catch (error) {
      console.error('Error saving changes:', error);
      // Show an error message or handle the error appropriately
    }
  };


return (
    <div style={{ backgroundColor: '#f8f8f8', padding: '20px' }}>
      <h1 style={{ color: '#333', fontFamily: 'Georgia, serif', textAlign: 'center' }}>Profile Settings</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '300px', textAlign: 'center' }}>
          <img
            src={profilePic || user?.photoURL || 'https://via.placeholder.com/150'}
            alt="Profile"
            style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover' }}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePicChange}
            style={{ display: 'block', margin: '10px auto' }}
          />
        </div>
      </div>
      <div style={{ maxWidth: '500px', margin: '0 auto' }}>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="email" style={{ display: 'block', fontFamily: 'Georgia, serif', color: '#333' }}>
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontFamily: 'Georgia, serif',
            }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="password" style={{ display: 'block', fontFamily: 'Georgia, serif', color: '#333' }}>
            New Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontFamily: 'Georgia, serif',
            }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="confirmPassword" style={{ display: 'block', fontFamily: 'Georgia, serif', color: '#333' }}>
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontFamily: 'Georgia, serif',
            }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="dateOfBirth" style={{ display: 'block', fontFamily: 'Georgia, serif', color: '#333' }}>
            Date of Birth
          </label>
          <input
            type="date"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={handleDateOfBirthChange}
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontFamily: 'Georgia, serif',
            }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="otherDetails" style={{ display: 'block', fontFamily: 'Georgia, serif', color: '#333' }}>
            Other Details
          </label>
          <textarea
            id="otherDetails"
            value={otherDetails}
            onChange={handleOtherDetailsChange}
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontFamily: 'Georgia, serif',
              resize: 'vertical',
            }}
          />
        </div>
        <button
          onClick={handleSaveChanges}
          style={{
            display: 'block',
            margin: '0 auto',
            backgroundColor: '#333',
            color: '#fff',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            fontFamily: 'Georgia, serif',
            cursor: 'pointer',
          }}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default ProfileSettings;