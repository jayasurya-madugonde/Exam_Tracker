import React, { useState, useEffect } from 'react';

const NotificationPage = () => {
  const [notifications, setNotifications] = useState<any[]>([]);

  // Load notifications from localStorage (or you can use your own persistence method)
  useEffect(() => {
    const savedNotifications = JSON.parse(localStorage.getItem('notifications') || '[]');
    setNotifications(savedNotifications);

    // Listen for new notifications from the service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data.type === 'NEW_NOTIFICATION') {
          // Update state with new notification
          const updatedNotifications = [...notifications, event.data.notification];
          setNotifications(updatedNotifications);
          // Store notifications in localStorage
          localStorage.setItem('notifications', JSON.stringify(updatedNotifications));
        }
      });
    }
  }, [notifications]); // Dependency array ensures the component updates when notifications change

  return (
    <div>
      <h1>Notifications</h1>
      <ul>
        {notifications.length === 0 ? (
          <p>No notifications yet!</p>
        ) : (
          notifications.map((notification, index) => (
            <li key={index}>
              <strong>{notification.title}</strong>
              <p>{notification.body}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default NotificationPage;
