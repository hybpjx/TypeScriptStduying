// 类类型： 类类型 可以通过接口来实现
(() => {
    // 定义一个接口
    interface IFly {
        fly(): void;
    }

    // 定义一个类,这个类的类型 就是上面定义的接口(实际上页可以理解为,IFly约束了这个类)
    class Person implements IFly {
        // 实现接口中的方法
        fly() {
            console.log("会飞了1")
        }
    }
    // 实例化对象
    const person = new Person()
    person.fly()

    interface ISwim {
        swim(): void;
    }


    // 定义一个类，这个类的类型 就是 IFly和ISwim（当前这个类可以实现多个接口，一个类也可以被多个接口所约束）
    class Person2 implements IFly, ISwim {
        fly(): void {
            console.log("我飞了2")
        }
        swim(): void {
            console.log("我游泳了2")
        }
    }

    const person2 = new Person2()
    person2.fly()
    person2.swim()

    // 总结：类可以通过接口的方式 来定义这个类的类型
    // 落地可以实现一个接口，也可以实现多个接口，要注意，接口中的内容都要真正的实现。


    // 定义了一个接口，继承其他的多个接口
    interface IFlyAndISwim extends IFly, ISwim { }
    class Person3 implements IFlyAndISwim {
        fly(): void {
            console.log("我飞了3")
        }
        swim(): void {
            console.log("我游泳了3")
        }
    }
    const person3 = new Person3()
    person3.fly()
    person3.swim()

    // 总结： 接口和接口之间叫继承(s使用的是extends 关键字)， 类和接口之间叫实现(使用的是implements)


})()