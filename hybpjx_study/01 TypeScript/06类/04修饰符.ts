// 修饰符 (类中的成员的修饰符)： 主要是描述类中的成员(属性，方法)的课访问性

// 类中的成员都有自己的 访问修饰符 public
// public —————公共的 默认修饰符 公开的 任何位置都可以访问类中的成员
// private ——————私有的  如果使用private 那么外部将无法访问，当然 子类也无法访问该属性
// protected ——————受保护的 修饰符 类中的成员如果使用protected来修饰 ，那么外部是无法访问这个成员的数据的 当然 子类成员是可以访问的
(() => {
    // 定义一个类
    class Person {
        // 属性
        // public name: string

        // 属性protected 修饰符
        protected name: string

        public constructor(name: string) {
            this.name = name
        }

        public eat() {
            console.log("真好吃", this.name)
        }
    }


    class Student extends Person {
        constructor(name: string) {
            super(name)
        }
        play() {
            console.log("我就喜欢布娃娃", this.name)
        }
    }

    const p = new Person("大蛇丸")

    // console.log(p.name)

    p.eat()


    const student = new Student("红豆")
    student.play()
    // console.log(student.name)
})()