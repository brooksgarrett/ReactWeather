// Callback method
function getTempCallback (location, callback) {
    callback(undefined, '78');
    callback('City not found');
}

getTempCallback('Philadelphia', function(err, temp) {
    if (err) {
        console.log('Error', err);
    } else {
        console.log('Success', temp);
    }
});

// ES6 Promises
function getTempPromise (location) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(79);
            reject('City not found');
        }, 1000);
    });
}

getTempPromise('Philadelphia').then(function (temp) {
    console.log('Promise success and temp is ', temp);
}, function (err) {
    console.log('Error occured ', err);
});