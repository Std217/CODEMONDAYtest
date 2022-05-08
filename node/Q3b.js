const userData = [
    {
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
    }
  ]

const prompt = require('prompt-sync')()

getAgebyName = ()=> {
    for(p in userData) {
        if (userData[p].name == input) {
            console.log(userData[p].age)
        }
    }
}

let input = prompt('input Name >>>')


console.log(getAgebyName())





