const Clarifai = require('clarifai');
const fs = require('fs')

const sourceFile = require('./sourceFile.json');
const app = new Clarifai.App({
    apiKey: 'cc7615603a6e476a8afc2c76350fce27'
});

const withGender = []
let counter = 0;
(async () => {
        for (let person of sourceFile) {
            await app.models.predict("c0c0ac362b03416da06ab3fa36fb58e3", person.pictureUrl).then(
                function (response) {
                    // do something with response
                    var gender =
                        response.outputs[0].data.regions[0].data.face.gender_appearance.concepts[0].name || 'female'
                    var characterValue = response.outputs[0].data.regions[0].data.face.gender_appearance.concepts[0].value || 1

                    // }
                    // console.log(JSON.stringify(response.outputs[0].data, null, 3))
                    // if (gender === 'feminine') {
                    //     person.gender = 'female'
                    // } else if (gender === 'masculine') {
                    //     person.gender = 'male'
                    // }
                    console.log(person.name, ":", gender, ':', characterValue, '  ')
                    // updateJson(persion,gender)
                    withGender.push({
                        ...person,
                        gender
                    })



                },
                function (err) {
                    // there was an error
                   

                    // updateJson(person, gender)

                    console.log(err);
                }
            ).catch((err) => {
                console.log('error has been occured', err)
                gender = 'female'
                withGender.push({
                    ...person,
                    gender
                })
            });








        }


        const toBeSaved = JSON.stringify(withGender)

        await fs.writeFile("withGender2.json", toBeSaved, 'utf8', function (err) {
            if (err) {
                console.log("An error occured while writing JSON Object to File.");
                return console.log(err);
            }

            console.log("JSON file has been saved.");
        });
    }

)();



const updateJson = async (person, gender) => {
    let withGender = JSON.parse(await fs.readFileSync('withGender.json'));

    withGender.push({
        ...person,
        gender
    })




    await fs.writeFile("withGender.json", toBeSaved, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }

        console.log("JSON file has been saved.");
    });
}