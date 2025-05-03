import { useEffect } from "react";
import { getToken, onMessage } from "firebase/messaging";
import { messaging } from "../firebase-config";

const InitFCM = () => {
  useEffect(() => {
    const setupFCM = async () => {
      try {
        const permission = Notification.permission;

        if (permission === "default") {
          const newPermission = await Notification.requestPermission();
          if (newPermission !== "granted") {
            console.warn("❌ User denied or closed the notification prompt.");
            return;
          }
        }

        if (Notification.permission === "granted") {
          const token = await getToken(messaging, {
            vapidKey: "BCMZddmJ3PqEPDfc_-RKrEPs4zKM3PMAtnjl60l5PvIsFy4VcBZLvVrgIAq3g65Y81LCbdoKP80YW2I7DAgVYZ4",
          });

          if (token) {
            console.log("✅ FCM Token:", token);
            alert("✅ Notifications are enabled. Token received. Check console.");
          } else {
            console.warn("⚠️ No FCM token received.");
          }
        } else {
          console.warn("❌ Notifications permission not granted.");
        }
      } catch (error) {
        console.error("🔥 Error initializing FCM:", error);
      }
    };

    setupFCM();

    // 👉 Add notification listener for foreground messages
    const unsubscribe = onMessage(messaging, (payload) => {
      console.log("📨 Foreground notification received:", payload);

      const title = payload.notification?.title || "No Title";
      const body = payload.notification?.body || "No Body";


      // Optional alert
      alert(`🔔 ${title}\n${body}`);
    });

    return () => unsubscribe(); // Cleanup listener
  }, []);

  return null;
};

export default InitFCM;
