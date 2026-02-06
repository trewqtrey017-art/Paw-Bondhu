// Local testing defaults.
// Replace with your Firebase web app config to enable Firebase mode.
window.PAW_BONDHU_FIREBASE_CONFIG = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

// Keeps Firestore read/write local when you are running on localhost.
window.PAW_BONDHU_FIREBASE_USE_EMULATOR = true;
window.PAW_BONDHU_FIRESTORE_EMULATOR_HOST = "127.0.0.1";
window.PAW_BONDHU_FIRESTORE_EMULATOR_PORT = 8080;
