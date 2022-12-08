
/*
继承
类与类之间的关系 继承后 类之间的称呼
A类继承了B类， A叫子类，B叫基类
子类——————> 派生类
基类——————> 超类(父类)
一旦发生了继承关系，就出现了 父子类的关系
*/
(() => {
    // 定义一个类
    class Person {
        // 定义属性
        name: string //姓名
        age: number //年龄
        gender: string // 性别

        // 定义构造函数
        constructor(name: string = "小明", age: number = 18, gender: string = "男") {
            // 更新属性数据
            this.name = name
            this.age = age
            this.gender = gender
        }

        // 定义实例方法
        sayHi(str: string): void {
            console.log(`我是${this.name},${str}`)
        }
    }

    // 定义一个基类 继承自Person
    class Student extends Person {
        constructor(name: string, age: number, gender: string) {
            // 调用的是父类中的构造函数 使用的是super
            super(name, age, gender)
        }

        // 可以调用父类的方法吗

        sayHi(): void {

            console.log("我是学生类中的sayHi方法")
            // 调用 父类中的sayhi方法
            super.sayHi("haha")
        }
    }

    // 实例化Person

    const person = new Person()

    person.sayHi("你好")

    // 实例化student
    const student = new Student("小王", 16, "女")
    student.sayHi()


    // 总结：类和类之间如果需要有继承关系，需要使用extends关键字
    // 子类中可以调用父类中的构造函数，需要使用super关键字(包括调用父类中的实例方法，也可以使用super)
    // 子类中可以重写父类的方法
})()