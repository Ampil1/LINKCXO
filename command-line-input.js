var fs = require('fs');
var request = require('request');
var prompt = require('prompt');

var prompt_attributes = [{ name: 'username' }];
prompt.start();
prompt.get(prompt_attributes, function (err, result) {
    if (err) {
        console.log(err);
        return 1;
    } else {
        var joke = result.username;
        request(`https://icanhazdadjoke.com/search?term=${escape(joke)}`, { json: true }, (err, res, body) => {

            if (err) {
                return console.log("EROR", err);
            }
            if (body.search_term) {
                const searchItems = body.results.find((element) => element.joke == joke);
                fs.writeFile('jokes.txt', searchItems.joke, function (err) {
                    if (err) throw err;
                    console.log('Saved!', "Here's a random joke for you:");
                });
            }
            else {
                console.log("no jokes were found for that search term.");
            }

        });

    }
});
