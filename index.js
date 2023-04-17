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

const button = document.getElementById('button');

if (button) button.addEventListener('click', async () => {
  try {
    // await navigator.mediaDevices.getUserMedia({ video: true });
    navigator.mediaDevices.enumerateDevices().then(devices => 
      devices.forEach(device => alert(device.label)))
    alert('success');
  } catch {
    alert('error');
  }

//   navigator.permissions.query({ name: 'camera' }).then(function(permissionStatus){
//   alert('State: ', permissionStatus.state);
// }).catch(error => alert('Error: ', error));
  
  // const devices = await navigator.mediaDevices.enumerateDevices();
  // // filter on video inputs, and map to query object
  // const queries = devices
  //   .filter(({ kind }) => kind === "videoinput")
  //   .map(({ deviceId }) => ({ name: "camera", deviceId }));

  // const promises = queries.map((queryObj) =>
  //   navigator.permissions.query(queryObj)
  // );

  // try {
  //   const results = await Promise.all(promises);
  //   // log the state of each camera
  //   results.forEach(({ state }, i) => alert(state));
  // } catch (error) {
  //   alert(error);
  // }
})


// navigator.permissions.query({ name: 'camera' }).then(function(permissionStatus){

//   alert(permissionStatus.state);
// })

// function onScanSuccess(decodedText, decodedResult) {
//   console.log(`Code scanned = ${decodedText}`, decodedResult);
// }
// var html5QrcodeScanner = new Html5QrcodeScanner(
// "qr-reader", { fps: 10, qrbox: 250 });
// html5QrcodeScanner.render(onScanSuccess);

