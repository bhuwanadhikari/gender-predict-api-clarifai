
const Clarifai = require('clarifai');
const fs = require('fs')

const sourceFile = require('./sourceFile.json');
const app = new Clarifai.App({ apiKey: '67ed35e690244348b66e2a7548271910' });


const withGender = [];
let counter = 0;
(async () => {
    for (let person of sourceFile) {
        await app.models.predict("c0c0ac362b03416da06ab3fa36fb58e3", person.pictureUrl).then(
            function (response) {
                // do something with response
                const gender = response.outputs[0].data.regions[0].data.face.gender_appearance.concepts[0].name
                const characterValue = response.outputs[0].data.regions[0].data.face.gender_appearance.concepts[0].value
                // console.log(JSON.stringify(response.outputs[0].data, null, 3))
                // if (gender === 'feminine') {
                //     person.gender = 'female'
                // } else if (gender === 'masculine') {
                //     person.gender = 'male'
                // }
                console.log(person.name, ":", gender, ':', characterValue, '  ', counter)
                // withGender.push(person)
            },
            function (err) {
                // there was an error
                console.log(err);
            }
        ).catch((err) => {
            console.log('error has been occured', err)
        });
    }
})();



                // fs.writeFile("withGender.json", withGender, 'utf8', function (err) {
                    //     if (err) {
                        //         console.log("An error occured while writing JSON Object to File.");
                        //         return console.log(err);
                        //     }

//     console.log("JSON file has been saved.");
// });
