# knife

Parse JSON that's smushed together

![knife](http://i.imgur.com/ywYZ5.png)

# why?

Imagine you have a TCP server that clients are sending JSON to. At fast paces, you can't know if the end of the message is actually the end of the JSON object.

Instead of searching for a delimiter or control character, why not continually parse it?

# install

    npm install knife

# example

````javascript

var knife = require('knife');

var testObj = {
  lol: 'wut'
}

var goodJSON = JSON.stringify(testObj),
    badJSON = goodJSON + goodJSON;

console.log([
  knife.parse(goodJSON),
  knife.parse(badJSON)
]);

````

# knife.parse(uglyStuff, debug = false)

will always return

````javascript
{
  results: [ {}, {}, ... ],
  remainder: ''
}
````
