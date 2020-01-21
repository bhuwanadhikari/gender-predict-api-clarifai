
const Clarifai = require('clarifai');

const app = new Clarifai.App({ apiKey: '67ed35e690244348b66e2a7548271910' });

app.models.predict("c0c0ac362b03416da06ab3fa36fb58e3", "https://scontent.fktm3-1.fna.fbcdn.net/v/t31.0-1/c282.0.960.960a/p960x960/10506738_10150004552801856_220367501106153455_o.jpg?_nc_cat=1&_nc_ohc=uyOkvaKW9KwAX_Sw1Nf&_nc_ht=scontent.fktm3-1.fna&_nc_tp=1003&oh=bfd681deeda583431c48a2b2616a7e5c&oe=5EA51169").then(
    function (response) {
        // do something with response
        console.log(response.outputs[0].data.regions[0].data.face.gender_appearance.concepts[0].name)
        console.log(response.outputs[0].data.regions[0].data.face.gender_appearance.concepts[0].value)

    },
    function (err) {
        // there was an error
        console.log(err);
    }
);
