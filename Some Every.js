var ages = [12,14,16,2];

console.log(ages);

a = ages.some(checkAdult);
console.log(a);

function checkAdult(age){
    return age >= 18;
}