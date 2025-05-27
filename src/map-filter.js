var numbers = [1,2,3,4,5]

var reza = numbers.map(function(item){
    return item * 2;
});

console.log(reza); //

var reza_filter = numbers.filter(function(item){
    return item > 3;
})

var reza_reduce = numbers.reduce(function(accumulator, currentVal){
    return accumulator + currentVal;
}, 0)

console.log(reza_reduce); //

var reza_find = numbers.find(function(item){
    return item % 2 === 0
})

console.log(reza_find)