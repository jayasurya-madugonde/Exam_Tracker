importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js');
firebase.initializeApp({
  apiKey: "AIzaSyBdSYxzurkc4pTVxA4P89YdfBo-RZVUZBw",
  authDomain: "exam-tracker-532c8.firebaseapp.com",
  projectId: "exam-tracker-532c8",
  storageBucket: "exam-tracker-532c8.appspot.com",
  messagingSenderId: "221619457061",
  appId: "1:221619457061:web:a8d5662e1a79a8e1ae43cc",
  measurementId: "G-T7E3CQ3P73"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log('[firebase-messaging-sw.js] ✅ Background message received:', payload);

  const notificationTitle = payload.notification?.title || 'Notification';
  const notificationOptions = {
    body: payload.notification?.body || 'You have a new message.',
    icon: '/firebase-logo.png',
    data: {
      click_action: payload.notification?.click_action || "http://localhost:5174"
    }
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// Optional: handle click on the notification
self.addEventListener('notificationclick', function (event) {
  const click_action = event.notification.data?.click_action || 'http://localhost';
  event.notification.close();
  event.waitUntil(clients.openWindow(click_action));
});