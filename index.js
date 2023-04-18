function checkIos() {
  const userAgent = window.navigator.userAgent.toLowerCase();
  if (userAgent.indexOf("iphone") > -1 || userAgent.indexOf("ipad") > -1)
    return true;
  return false;
}

const handleClick = async () => {
  if (window?.webkit?.messageHandlers?.scanEan === undefined) {
      alert('Feature not available on this device');
      return;
  }

  try {
      await navigator?.mediaDevices?.getUserMedia({ video: true });
  } catch {
      alert('Please unblock your camera to use this feature');
  }

  window.webkit.messageHandlers.scanEan.postMessage({});
};

window.barcodeBtnProps = {
  onSelect: () => console.log('select'),
}

window.eanScannedSuccess = function (ean) {
    const { barcodeBtnProps } = window;
    if (!barcodeBtnProps) {
        return;
    }

    barcodeBtnProps.onSelect(ean);
};

const button = document.getElementById('button');

if (button) button.addEventListener('click', handleClick);

// if (button) button.addEventListener('click', async () => {
//   navigator.permissions.query({name:'camera'}).then(function(result) {
//     alert(result.state);
//     if (result.state === 'granted') {
//         //permission has already been granted, no prompt is shown
//     } else if (result.state === 'prompt') {
//        //there's no peristent permission registered, will be showing the prompt
//     } else if (result.state === 'denied') {
//        //permission has been denied
//     }
// });
//   // try {
//   //   await navigator.mediaDevices.getUserMedia({ video: true });
//   //   alert('success');
//   // } catch {
//   //   alert('error');
//   // }
// })



  
