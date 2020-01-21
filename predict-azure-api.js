'use strict';

const request = require('request');
const keys = require('./keys.js');

// Replace <Subscription Key> with your valid subscription key.
const subscriptionKey = keys.subscriptionKey;

// You must use the same location in your REST call as you used to get your
// subscription keys. For example, if you got your subscription keys from
// westus, replace "westcentralus" in the URL below with "westus".
const uriBase = keys.urlBase;

const imageUrl =
    'https://upload.wikimedia.org/wikipedia/commons/3/37/Dagestani_man_and_woman.jpg';


// Request parameters.
const params = {
    'returnFaceId': 'false',
    'returnFaceLandmarks': 'false',
    'returnFaceAttributes': 'gender'
};

const options = {
    uri: uriBase,
    qs: params,
    body: '{"url": ' + '"' + imageUrl + '"}',
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': subscriptionKey
    }
};

request.post(options, (error, response, body) => {
    if (error) {
        console.log('Error: ', error);
        return;
    }
    let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
    console.log('JSON Response\n');
    console.log(JSON.parse(jsonResponse)[0].faceAttributes.gender);
});