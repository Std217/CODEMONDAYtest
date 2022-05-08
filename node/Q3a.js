
const dataUser = [
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

let a = dataUser.filter((item) => {
  return item.age === Math.max(...dataUser.map((item) => item.age));
});
console.log(`Who has maximum age is >>>>>${a[0].name}`)