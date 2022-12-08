// 静态成员: 在类中通过static修饰的属性或者方法 那么就是静态的属性以及方法，也称之为：静态成员
// 静态成员在使用的时候是通过. 的语法来调用的
(() => {
    class Person {
        // 静态属性
        static name1: string = "小甜甜";
        // 类中有个内置的name属性，所以会显示错误信息
        constructor() {
            // 此时this是实例对象 name1是静态属性
            // this.name1 = name;
        }
        // 静态方法
        static sayHello() {
            console.log(`Hello`);
        }

    }

    // const person: Person = new Person()
    // console.log(person.name1)
    // person.sayHello();
    console.log(Person.name1);
    Person.name1 = "1111"
    console.log(Person.name1);
    Person.sayHello()

})()