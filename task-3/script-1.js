'use strict'

function User(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;

    this.print = () => {
        console.log(`Name: ${this.name}, last name: ${this.lastName}, age: ${this.age}`)
    }
}
