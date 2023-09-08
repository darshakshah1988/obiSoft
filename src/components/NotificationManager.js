import React, { useState } from 'react';
import Notification from './Notification';

const NotificationManager = () => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (type, message) => {
    const newNotification = { type, message };
    setNotifications([...notifications, newNotification]);
  };

  const removeNotification = index => {
    const updatedNotifications = [...notifications];
    updatedNotifications.splice(index, 1);
    setNotifications(updatedNotifications);
  };

  return (
    <div className="notification-manager">
      {notifications.map((notification, index) => (
        <Notification
          key={index}
          type={notification.type}
          message={notification.message}
          onClose={() => removeNotification(index)}
        />
      ))}
    </div>
  );
};

export default NotificationManager;
