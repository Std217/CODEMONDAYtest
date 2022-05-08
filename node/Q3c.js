var userData = [{
    name: 'Win',
    age: 25
  },
  {
    name: 'Ton',
    age: 25
  },
  {
    name: 'Jeff',
    age: 33
  },
  {
    name: 'Boat',
    age: 26
  }],
    result = userData.reduce(function (r, a) {
        r[a.age] = r[a.age] || [];
        r[a.age].push(a.name);
        return r;
    }, Object.create(null));

console.log(result);
    
