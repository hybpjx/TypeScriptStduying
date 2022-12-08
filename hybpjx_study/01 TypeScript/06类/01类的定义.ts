// 类： 你可以理解为模板 你可以通过模板来实例化对象
//面向对象的编程思想
(() => {
    // ts中的类的定义以及使用
    class Person {
        // 定义属性
        name: string
        age: number
        gender: string
        // 定义构造函数： 为了以后实例化对象的时候，可以之间对属性的值进行初始化
        constructor(name: string = "小王", age: number, gender: string = "男") {
            // 更新对象中的属性数据
            this.name = name
            this.age = age
            this.gender = gender
        }

        // 定义实例方法
        sayHi() {
            console.log(`大家好，我是${this.name},今年${this.age}岁了，是个${this.gender}孩子`)
        }
    }

    // ts中使用类，实例化对象，可以之间进行初始化操作
    const p = new Person("小明", 18, "男")
    p.sayHi()
})()