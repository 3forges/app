import { ExpoConfig } from 'expo/config';

// In SDK 46 and lower, use the following import instead:
// import { ExpoConfig } from '@expo/config-types';

const config: ExpoConfig = {
  name: 'my-app',
  slug: 'my-app',
  plugins: [
    [
      "react-native-vision-camera",
      {
        "cameraPermissionText": "$(PRODUCT_NAME) needs access to your Camera.",
        // optionally, if you want to record audio:
        "enableMicrophonePermission": true,
        "microphonePermissionText": "$(PRODUCT_NAME) needs access to your Microphone."
      }
    ]
  ], 
  android: {
    package: "com.bioboosterbob.myapp"
  },
  ios: {
    bundleIdentifier: "com.bioboosterbob.myapp"
  }

};

export default config;

