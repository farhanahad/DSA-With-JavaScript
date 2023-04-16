class Person{
    name;
    email;

    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    print(){
        return `My name is ${this.name}`
    }
}
const obj1=new Person("Farhan","farhanahad@gmail.com");
console.log(obj1.print());

const obj2=new Person("Farhana","farhana@gmail.com");
console.log(obj2.print());
