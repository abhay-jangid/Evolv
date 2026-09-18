import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.evolv.recomp',
  appName: 'Evolv',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
  backgroundColor: '#09090B',
  plugins: {
    LocalNotifications: {
      smallIcon: 'ic_stat_evolv',
      iconColor: '#FF5500',
      sound: 'default',
    },
  },
};

export default config;
