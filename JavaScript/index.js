
let person = {
    myname: 'Anthony',
    age: 21,
    add: 'Ipil'
};

person.myname = 'Kok';
person['myname'] = 'Hehehe';


//array
let colors = ['red', 'blue', 1];
colors[3]= 'yellow';

//function
function greeting(name){
    console.log('Greeting ' + name);
}

function sqrts(number){
    return number * number;
}

let nums = sqrts(3)

console.log(nums);

