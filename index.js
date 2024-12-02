function Person (name,age) {
    this.name = name
    this.age = age
    this.sayHello = function (){
        console.log("Hello from function")
    }
}


function MyName () {
return {
    name:"Nishchay Bhatt",
    age:25
}
}
const me = new Person("Nishchay", 25)
console.log("_____________________________")
console.log(me)
console.log("_____________________________")
const myname = MyName()


Person.prototype.sayHello = function () {
    console.log(`Hello from ${this.name}, My age is ${this.age}`)
}
me.sayHello()

Person.prototype.sayHello.call(myname)
Person.prototype.sayHello.bind(me)
me.sayHello()

