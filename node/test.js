var cars = [{
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
    result = cars.reduce(function (r, a) {
        r[a.age] = r[a.age] || [];
        r[a.age].push(a.name);
        return r;
    }, Object.create(null));

console.log(result);
    

