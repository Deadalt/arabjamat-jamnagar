// Dashboard specific functionality

document.addEventListener('DOMContentLoaded', () => {
  // Check auth state
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in
      document.getElementById('user-email').textContent = user.email;
      document.getElementById('user-name').textContent = user.displayName || user.email.split('@')[0];
      
      // Format last login time
      const lastLogin = user.metadata.lastSignInTime;
      if (lastLogin) {
        const options = { 
          year: 'numeric', 
          month: 'short', 
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        };
        const formattedDate = new Date(lastLogin).toLocaleDateString('en-IN', options);
        document.getElementById('last-login').textContent = formattedDate;
      }
      
      // Load user data from Firestore
      loadUserData(user.uid);
    } else {
      // No user is signed in
      window.location.href = "login.html";
    }
  });
});

function logout() {
  firebase.auth().signOut().then(() => {
    window.location.href = "login.html";
  }).catch((error) => {
    alert(error.message);
  });
}

function loadUserData(userId) {
  // In a real app, you would load user-specific data from Firestore
  document.getElementById('profile-name').value = 'Example User';
  document.getElementById('profile-phone').value = '+91 9876543210';
  document.getElementById('profile-address').value = 'Jamnagar, Gujarat';
  
  // Sample upcoming events
  const events = [
    'Community Meeting - June 15, 7:00 PM',
    'Education Workshop - June 20, 10:00 AM',
    'Health Camp - June 25, 9:00 AM'
  ];
  const eventsList = events.map(e => `<div class="mb-2">• ${e}</div>`).join('');
  document.getElementById('upcoming-events').innerHTML = eventsList;
  
  // Sample announcements
  const announcements = [
    'New member orientation on June 10',
    'Scholarship applications open until June 30',
    'Volunteers needed for upcoming event'
  ];
  const announcementsList = announcements.map(a => `<div class="mb-2">• ${a}</div>`).join('');
  document.getElementById('announcements').innerHTML = announcementsList;
}

// Save profile
document.getElementById('save-profile').addEventListener('click', function() {
  // In a real app, you would save to Firestore
  alert('Profile saved successfully!');
});