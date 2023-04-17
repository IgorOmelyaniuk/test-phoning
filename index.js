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


window.addEventListener('load', async () => {
//   console.log(1111111);
//   const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//   console.log('stream', stream);
//   alert(stream);
//   const devices = await navigator.mediaDevices.enumerateDevices();
//   // filter on video inputs, and map to query object
// const queries = devices
// .filter(({ kind }) => kind === "videoinput")
// .map(({ deviceId }) => ({ name: "camera", deviceId }));

// const promises = queries.map((queryObj) =>
// navigator.permissions.query(queryObj)
// );

// try {
// const results = await Promise.all(promises);
// // log the state of each camera
// results.forEach(({ state }, i) => alert(state));
// } catch (error) {
// console.error(error);
// }
})


window.addEventListener('load', async() => {
  navigator.getUserMedia (
    {
       video: true,
    },
 
    // successCallback
    function(localMediaStream) {
       video.onloadedmetadata = function(e) {
          alert(localMediaStream);
       };
    },
 
    // errorCallback
    function(err) {
     if(err) {
      console.log('err', err);
      alert(err);
       // Explain why you need permission and how to update the permission setting
     }
    }
 );
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

