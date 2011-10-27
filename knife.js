module.exports = {
  parse :function knife(shit){
    if (typeof shit == 'object') shit = JSON.stringify(shit);
    if (typeof shit == 'array') shit = shit.join('');

    var shits = [];

    for (var i in shit) {
      var sculpture;
      if (shit[i] == '}') {
          console.log(shit.substr(0, i));
        try {
          sculpture = JSON.parse(shit.substr(0, i));
          console.log(sculpture);
        } catch (e) {
          console.log('Coult not parse:');
          console.log(shit);
        }
      }
      if (sculpture) {
        shit.splice(0, i);
        shits.push(sculpture);
      }
    }

    return shits;

  }

}
