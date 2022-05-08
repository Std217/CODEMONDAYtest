const array1 = [1,2,3,4,5,6,7]

// const map1 = array1.map(x => x %2 == 0)

const result = array1.map((num, index) => {
    if(index %2 ==1) {
        return num * 2
    }
})

console.log(result)

