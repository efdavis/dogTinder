/* Set up code provided by Google

https://cloud.google.com/vision/docs/reference/libraries

Node documentation:
https://googlecloudplatform.github.io/google-cloud-node/#/docs/vision/0.11.0/vision

*/

// Imports the Google Cloud client library
const Vision = require('@google-cloud/vision');

// Your Google Cloud Platform project ID
const projectId = 'dogtinder-167823';

// Instantiates a client
const visionClient = Vision({
  projectId: projectId
});

// The name of the image file to annotate
const fileName = './public/images/jackrussell.jpg';

// Performs label detection on the image file
visionClient.detectLabels(fileName)
  .then((results) => {
    const labels = results[0];

    console.log('Labels:');
    labels.forEach((label) => console.log(label));
  })
  .catch((err) => {
    console.error('ERROR:', err);
  });
