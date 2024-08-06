
//construction function
// let person = function(name,age,address,gender){
// this.name=name;
// this.age=age;
// this.address=address;
// this.gender=gender;
// this.welcome=function(){
//     console.log(`welcome ${this.name}`)   //will be duplicated in ram
// }
// }
// person.prototype.hello=function(){
//     console.log("hello")
// }
// function Student(name,age,address,gender){
//     this.name=name;
//     this.age=age;
//     this.address=address;
//     this.gender=gender;
//     }

// let stud=new Student('nour',21,'cairo','F')
// console.log(stud);
// let p1=new person('nour',21,"mokattam","F");
// p1.hello();
// p1.welcome();


//ES6
//Map() enhanced object
let people={
    name:'nour',
    age:'21',
    gender:'F'
};
//Map Creation
let PeopleMap =new Map()
PeopleMap.set('name','nour'),
PeopleMap.set('age',21),
PeopleMap.set('gender','F'),

console.log(PeopleMap.size)
console.log(PeopleMap.get('name')) //clear() get() has()

//ES6=>FOROF
for(const [x,y] of PeopleMap){
    console.log(x,y)
}

class person{
constructor(name,age,address,gender){
    this.name=name;
    this.age=age;
    this.address=address;
    this.gender=gender;
}
hello(){
    console.log("Hello")
}
}

let p1=new person('nour',21,"mokattam","F");
console.log(p1)
class student extends person{
    constructor(name,age,address,gender,gpa){
        super(name,age,address,gender);
        
        this.gpa=gpa;
        
    }
}

let s1= new student('nour',21,"mokattam","F",2.3)
console.log(s1)