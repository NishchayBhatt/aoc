/**
 * This is called an object Literal not just Objects
 * as we have literally written it out unlike carving
 * it out of an object 
 * 
 * */
const person = {
    name: "Nishchay",
    age:25,
    setName:function (name) {
        this.name = name
    },
    getName: function () {
        return this.name
    },
    introduction: function () {
        console.log(`Hi my name is ${this.name} and my age is ${this.age}`)
    }
}


person.introduction()
person.setName("Rahul")
person.introduction()
console.log("------------------------------")
console.log(person["name"])
console.log(person["introduction"])
console.log(person["setName"])