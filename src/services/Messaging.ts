export function messaging (firebase: any){
    const messaging = firebase.messaging();
  
  messaging.usePublicVapidKey("BBHX6gtYOie-qutpD5_NtZDxkRjdUamnQP-TG_AKO99bZYYtYR3cNkb466AKRvZ3p2qbL1luPZoetiYW0B_V7pA"); // 1. Generate a new key pair
  
  // Request Permission of Notifications
  messaging.requestPermission().then(() => {
    console.log('Notification permission granted.');
  
    // Get Token
    messaging.getToken().then((token: any) => {
      console.log(token)
    })
  }).catch((err:[]) => {
    console.log('Unable to get permission to notify.', err);
  });
}