// 多态：父类的引用引入了子类型的对象，不同类型的对象针对相同的方法，产生了不同的行为
(() => {
    // 定义一个父类
    class Animal {
        name: string
        constructor(name: string) {
            this.name = name
        }

        // 实例方法
        run(distance: number = 0) {
            console.log(`跑了${distance}米`, this.name)
        }
    }

    class Dog extends Animal {
        // 构造函数
        constructor(name: string) {
            // 调用父类的构造函数, 实现了子类中属性的初始化操作
            super(name)
        }
        // 实例方法 重写了方法
        // 实例方法
        run(distance: number = 5) {
            console.log(`跑了${distance}米`, this.name)
        }
    }

    class Cat extends Animal {
        // 构造函数
        constructor(name: string) {
            // 调用父类的构造函数, 实现了子类中属性的初始化操作
            super(name)
        }
        // 实例方法 重写了方法
        // 实例方法
        run(distance: number = 10) {
            console.log(`跑了${distance}米`, this.name)
        }
    }


    // 实例化父类对象
    const animal: Animal = new Animal("动物")
    animal.run()
    //  实例化子类对象
    const dog: Dog = new Dog("小汪")
    dog.run()
    const cat: Cat = new Cat("小喵")
    cat.run()

    console.log("++++++++++++++++++++++++++++++++++++++++++++")

    // 父类和子类的关系：父子关系,此时 父类类型创建子类的对象

    const dog1: Animal = new Dog("小黄")
    dog1.run()

    const cat1: Animal = new Cat("小咪")
    cat1.run()


    console.log("++++++++++++++++++++++++++++++++++++++++++++")
    // 那么有什么用呢


    function showRun(ani: Animal) {
        ani.run()
    }

    showRun(dog1)
    showRun(cat1)

})()