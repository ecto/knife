module.exports = {
  parse: function(shit, debug){
    if (typeof shit == 'object') shit = JSON.stringify(shit);
    if (typeof shit == 'array') shit = shit.join('');

    var easy;
    try {
      easy = JSON.parse(shit);
    } catch (e) {}
    if (easy) {
      return {
        result: [ easy ],
        remainder: null
      }
    }

    var shits = [],
        i = 0;

    while (i < shit.length) {
      var sculpture = undefined;
      if (debug) console.log(shit.substr(0, i + 1));
      try {
        sculpture = JSON.parse(shit.substr(0, i + 1));
        if (debug) console.log(sculpture);
      } catch (e) { }
      if (sculpture) {
        shits.push(sculpture);
        var shitleft = shit.substr(i + 1, shit.length - 1);
        if (debug) console.log('---------------- ' + shitleft);
        shit = shitleft;
        i = 0;
      } else {
        i++;
      }
    }

    return {
      result: shits,
      remainder: shit
    };

  }

}
