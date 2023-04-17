function checkIos() {
  const userAgent = window.navigator.userAgent.toLowerCase();
  if (userAgent.indexOf("iphone") > -1 || userAgent.indexOf("ipad") > -1)
    return true;
  return false;
}

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

const handleClick = () => {
    console.log(window?.webkit);

    if (checkIos()) {
      alert('ios');
    } else {
      alert('not ios');
    }

    if (window?.webkit?.messageHandlers?.scanEan === undefined) {
        alert('Feature not available on this device');
        return;
    }

    window.webkit.messageHandlers.scanEan.postMessage({});
};

const button = document.getElementById('button');

if (button) button.addEventListener('click', handleClick);

// navigator.mediaDevices.enumerateDevices()
// .then((devices)=> {
//   let haveAllDevices=true;
//   devices.forEach((device)=>{
//     console.log(device);
//    });
//    //do something about ..
// });

navigator.permissions.query({ name: 'camera' }).then(function(permissionStatus){

  alert(permissionStatus.state);
})

// function onScanSuccess(decodedText, decodedResult) {
//   console.log(`Code scanned = ${decodedText}`, decodedResult);
// }
// var html5QrcodeScanner = new Html5QrcodeScanner(
// "qr-reader", { fps: 10, qrbox: 250 });
// html5QrcodeScanner.render(onScanSuccess);

